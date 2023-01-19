#npx create-react-app ./

#npmjs.com/package
npm install react-beautiful-dnd --save : 드래그인드랍 모듈
<DragDropContext>
-Drag and drop을 사용하고자 하는 어플리케이션의 영역을 감싸는 Wrapper 입니다
    
<Droppable>
-Drag and drop에서 drop을 할 수 있는 영역이자, Draggable을 감싸는 Wrapper 입니다.

<Draggable>
-Drag and Drop의 주체가 되는, Drag가 가능한 컴포넌트를 감싸는 Wrapper 입니다.

provided object에는 스타일 지정 및 조회를 위한 속성이 포함 되어있다.

snapshot

provided.placeholder 목록에 빈 공간을 만든다.

#developer.mozilla.org/ko/docs

#@hello-pangea/dnd

#리액트 불변성이란
불변성이란 사전적 의미로는 값이나 상태를 변경할 수 없는 것을 의미.

#자바스크립트 타입을 통한 불변성 의미 살펴보기
원시타입은 불변성, 참조타입(Array,obj)은 그렇지 않음
참조타입은 불변성을 신경 써야된다.
참조타입은 힙메모리에서만 변경이된다.

#불변성을 지켜야하는 이유?
~~

#불변성을 지키는 방법
const array = [1,2,3,4];
const sameArray = array;
same.Array.push(5);
--얕은복사
const array = [1,2,3,4];
const dofferentArray = [...array,5];
--깊은복사

#React.memo를 이용한 컴포넌트 렌더링 최적화

#useCallback을 이용한 함수 최적화
렌더링 될 때 그안에 있는 함수도 다시 생성된다. 
자식에게 props를 내려준다면 자식 컴포넌트도 함수가 새롭게 만들어지니 계속 리렌더링 된다.
그걸 막기위한 useCallback

#useCallback이란
함수 내에서 참조하는 state,props가 있다면 의존성 배열에 추가, 유즈콜백으로 인해서 의존성이 변하지 않는다면 함수는 새로 생성되지 않음, 메모리에 새로 할당되지 않고 동일 참조 값을 사용

#useMemo를 이용한 결과 값 최적화

#Memoization이란
비용이 많이 드는 함수 호추르이 결과를 저장하고 동일한 입력이 다시 발생할 때 캐시된 결과를 반환하여 컴퓨터 프로그램의 속도를 높이데 주로 사용되는 최적한 기술

#useMemo란
리턴값의 계산이 복잡할때 파라미터가 변화하지 않는다면 재계산을 하지 않고 기존 값을 반환한다
function Component({a,b}{
    const result = compute (a,b)
    return <div>{result}</div>
})  

#localStorage에 todoData 값 담기
localStorage.setItem(key,value);
localStorage.setItem(key,JSON.stringify([]);
localStorage.getItem(key)
JSON.parse(localStorage.getItem(key))

#API사용하는 법
#themoviedb.org

#Axios란
HTTP비동기 통신 라이브러리, 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용합니다.

#인스터스화

#useEffect

#styled Components란
CSS-in-JS라고 하는 javascript에서 CSS를 처리해주는 라이브러리

#React Router Dom이란
웹 앱에서 동적 라우팅을 구현할 수 있다.

#Single Page Application(SPA)

#React Router설정

npm install react-router-dom --save

#useDebounce Custom Hooks

#useRef
특정 DOM을 선택할 때 사용하는 리액트 훅
클래스 컴포넌트 React.createRef();
함수형 컴포넌트 useRef();

#DOM을 선택해야 할 경우
1.엘리먼트 크기를 가져올때
2.스크롤바 위치를 가져올때
3.엘리먼트에 포커스를 설정 해줘야할때등등

#swiper

#npm install gh-pages --save-dev
github pages모듈


#########
#TDD(Test Driven Development)
실제 코드를 작성하기 전에 테스트 코드를 먼저 작성,
테스트 코드를 작성한 후 테스트 코드를 Pass 할 수 있는 실제 코드를 작성

#장점
1.실제 개발하면서 많은 시간이 소요되는 부분은 디버깅 부분이기에 TDD를 사용하면 디버깅 시간이 줄어들고 개발시간이 줄어든다.
2.TDD를 하므로 인해 많은 기능을 테스트하기에 소스 코드에 안정감이 부여된다.
3.소스코드를 하나하나 신중하게 작성하게 되어 코드가 깔끔해진다.

#React Testing Library
React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library위에 구축
DOM노드를 테스트하기 위한 매우 가벼운 솔루션
npm install --save-dev @testing-library/react

Enzyme -> 구현 주도 테스트
React Testing Library -> 행위 주도 테스트

#Jest란
React Testing Library로 렌더링 된걸 Jest가 테스트를 해준다.
Test Case를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인. 단위(Unit)테스트를 위해서 이용한다.

{filename}.test.js
{filename}.spec.js
folders inside tests

#Jest 아키텍처
describe(여러 관련 테스트를 그룹화하는 블록)
    --test(it)(개별 테스트를 수행하는곳)
        --expect(값을 테스트할 때마다 사용, matcher와 함께 사용)
        --matcher(다른 방법으로 값을 테스트 하도록 사용)
    --test(it)

#쿼리 함수
페이지에서 요소를 찾기 위해 테스트 라이브러리
("get","find","query")가 있습니다.

#getBy: 쿼리에 대해 일치하는 노드를 반환, 요소가 없거나 둘이상의 일치가 되면 설명 오류

#queryBy:쿼리에 대해 일치하는 노드를 반환, 요소가 없으면 null,둘이상의 일치가 되면 설명 오류

#findBy:일치하는 요소가 발견되면 Promise를 반환, 요소가 발견 되지 않거나 기본 제한 시간인 1000ms후에 둘 이상의 요소가 발견되면 Promise가 거부,둘 이상의 요소를 찾는경운 findAllBy

#waitFor: 일정 기간 동안 기다려야 할때 사용하여 기대가 통과할 때까지 기다림

#Prettier: 코드의 형식이나 문법등을 올바르게 자동 수정(코드 포맷터 역할)

#ESLint : 개발을 특정한 규칙을 설정하여 코드를 가독성 있게 바꿔주는 라이브러리

#firing Events
코드가 적을 경우 사용하지만 use Event가 더 좋다

#App 배포
Github Action를 이용한 배포
1.레포지토리 작성
2.App을 레포지토리에 연결
3.workflow생성(Actions->Node.js->run:npm CI-> run:npm i)
4.AWS로그인
5.S3(쿨라우드의 확장 가능한 스토레이지)클릭
6.버킷 만들기(버킷이름 작성 -> 버킷만들기)
7.속성탭 -> 정적 웹 사이트 호스팅 -> 편집 -> 활성화 -> 인덱스 문서(index.html) ->변경 사항 저장
8.버킷 정책 변경(권한탭 -> 퍼블릭 액세스 차단 -> 편집 -> 버튼해제 -> 변경 사항 저장)
9.버킷 정책 작성
{
    "Version":"2012-10-17",
    "Statement":[
        {
            "Sid":"PublicReadGetObject",
            "Effect":"Allow",
            "Principal":"*",
            "Action":[
                "s3:GetObject"
            ],
            "Resource":[
                "arn:aws:s3:::Bucket-Name/*"
            ]
        }
    ]
}
10.yml파일작성(Actions->Node.js)
    - uses: awact/s3-action@master
      with:
        args: --acl public-read --follow-symlinks --delete
      env:
        SOURCE_DIR: './build'
        AWS_REGION: 'ap-northeast-2'
        AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
10-1.AWS->IAM->사용자->사용자추가->사용자이름(~~),엑세스키체크->다음->권한(S3FullAccess)->다음->사용자만들기 ->AWS_ACCESS_KEY_ID ->AWS_SECRET_ACCESS_KEY

https://github.com/awact/s3-action

11.깃허브->셋팅->Secrets->Actions->
AWS_S3_BUCKET:S3네임
AWS_ACCESS_KEY_ID:AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY:AWS_SECRET_ACCESS_KEY

12.깃허브 -> Actions -> re-run jobs

#IAM이란?

#Next JS란
리액트의 SSR을 쉽게 구현할 수 있게 도와주는 간단한 프레임워크
SPA을 이용하여 CSR을 하기 때문에 좋은점도 있지만 단점도 있다.
그 부분이 바로 검색엔진 최적화(SEO)부분이 단점

#CSR?

#SSR?

######################################

#Next.js설치
npx create-next-app@latest
npx create-next-app@latest --typescript ./

#Next.js 아키텍처
-pages(이 폴더 안에 페이지들을 생성)
    --api
        --hello.ts
    --_app.tsx(공통되는 레이아웃을 작성)
    --index.tsx(/페이지)
    --about.tsx
--public
    --img(이미지같은 정적에셋들을 보관)
--styles
    --globals.css
    --Home.module.css(확장자 앞에 module을 붙여야 한다)
--next.config.js(Nextjs는웹팩을 기본 번들러로 사용)
--package.json(버전)

#Pre-rendering
NextJs는 모든 페이지를 pre-render합니다. 이 pre-render한다는 의미는 모든 페이지를 위한 HTML을 Client사이드에서 자바스크립트로 처리하기 전, 사전에 생성하는것 , 이렇게 하기 때문에 SEO검색엔진 최적화가 좋아집니다.

#Data Fetching
리액트에서는 데이터를 가져올 때 useEffect안에서 가져오지만 Nextjs는 아래의 방법을 이용
 -getStaticProps : static Generation으로 빌드할 때 데이터를 불러옴
 export async function getStaticProps(ccontext){
    const res = await fetch('https://');
    const posts = await res.json();
    return{
        props:{posts}
    }
 }
    
 -getStaticPaths : static Generation으로 데이터에 기반하여 pre-render시 특정한 동적 라우팅 구현 (pages/post/[id].js)
 export async function getStaticPaths(){
    const res = await fetch('https://');
    const posts = await res.json();

    return{
        props:[{params: {id : '1'}}],
        fallback:...
    }
 }

 -getServerSideProps : Server Side Rendering으로 요청이 있을 때 데이터를 불러옵니다.

 export async function getServerSideProps(){
    const res = await fetch('https://');
    const posts = await res.json();
    return{
        props:{}
    }
 }

 #TypeScript란
 자바스크립트에 타입을 부여한 언어, 자바스크립트의 확장된 언어라고 볼수있다. 브라우저에서 실행하려면 파일을 한번 변환 해주어야 합니다. 그 과정을 컴파일 이라고 부릅니다.

 #Type System이란
 -개발 환경에서 에러를 잡는 걸 도와줌
 -type annotations를 사용해서 코드를 분석할 수 있습니다.
 -오직 개발 환경에서만 활성화
 -타입 스크립트와 성능 향상과는 관계가 없습니다.

 #TypeScript사용이유

 #markdown.md파일이란?
 **Markdown**은 텍스트 기반의 마크업언어로 쉽게 쓰고 읽을 수 있으며 HTML로 변환이 가능합니다.

 #TypeScript타입이란?
 타입이란, 그 vaule가 가지고 있는 프로퍼티나 함수를 추론할 수 있는 방법
 Primitive Types
    --string
    --number
    --boolean
    --null
    --nudefined
    --symbol : 고유한 상수 값을 나타냅니다.
    --null

Object Types
    --function
    --array
    --classes
    --object

plus Types
    --Tuple
    --Enum
    --Any
    --Void
    --Union : 두개 이상의 데이터 타입을 지정가능
    --Never:절대 발생하지 않을 값(함수의 리턴타입으로 사용)

#TypeScript 선언 방법
let music:string = "123";
const num: number = 0;
let something:any[] = []
let empId: string | number
var employee : [number,string] = [1123,'sadf'] //Tuple

#Type annotaion, Type inference
let music:string = "123"; Type annotaion
let music = "123"; Type inference

#Type assetion이란
타입 변경을 해주는것

interface Foo{
    bar: number;
    bas: string;
}

var foo = {} as Foo;
foo.bar = 123;
foo.bas = "hello"