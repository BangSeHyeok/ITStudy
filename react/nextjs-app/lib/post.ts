//ssg파일가져오기
//npm install gray-matter --save
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(),'posts');

export function getSortedPostsData() {
    // posts 파일 이름을 잡아주기
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map(fileName =>{
        const id = fileName.replace(/\.md$/,"");

        const fullPath = path.join(postsDirectory,fileName);

        const fileContents = fs.readFileSync(fullPath,'utf-8');

        const matterResult = matter(fileContents);

        return{
            id,
            ...allPostsData(matterResult.data as {date: string; title:string})
        }
    })

    //Sorting

    return allPostsData.sort((a,b) =>{
        if(a.date < b.date){
            return 1
        }else{
            return -1
        }
    })
}