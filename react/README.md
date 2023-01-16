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