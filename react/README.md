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
비용이 ㅁ낳이 드는 함수 호추르이 결과를 저장하고 동일한 입력이 다시 발생할 때 캐시된 결과를 반환하여 컴퓨터 프로그램의 속도를 높이데 주로 사용되는 최적한 기술

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