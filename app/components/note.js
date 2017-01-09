1. state 和 props的使用，若元素是变化的，不能根据别的元素计算出来，则使用state。
2. 若元素是不变的，或者元素的变化可以个根据别的元素计算出来，则使用props。
3. 用户自定义的组件字母必须大写，否则会当成内置组件处理：<div><span>等
eg: 
	wrong:

		import React from 'react';

		// Wrong! This is a component and should have been capitalized:
		function hello(props) {
		  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
		  return <div>Hello {props.toWhat}</div>;
		}

		function HelloWorld() {
		  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
		  return <hello toWhat="World" />;
		}

fix problem above:
	right:

		import React from 'react';

		// Correct! This is a component and should be capitalized:
		function Hello(props) {
		  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
		  return <div>Hello {props.toWhat}</div>;
		}

		function HelloWorld() {
		  // Correct! React knows <Hello /> is a component because it's capitalized.
		  return <Hello toWhat="World" />;
		}


4.  wrong:

		import React from 'react';
		import { PhotoStory, VideoStory } from './stories';

		const components = {
		  photo: PhotoStory,
		  video: VideoStory
		};

		function Story(props) {
		  // Wrong! JSX type can't be an expression.
		  return <components[props.storyType] story={props.story} />;
		}


	right:

		import React from 'react';
		import { PhotoStory, VideoStory } from './stories';

		const components = {
		  photo: PhotoStory,
		  video: VideoStory
		};

		function Story(props) {
		  // Correct! JSX type can be a capitalized variable.
		  const SpecificStory = components[props.storyType];
		  return <SpecificStory story={props.story} />;
		}

5. 你可以用任何JavaScript expression 作为prop，用{}把它包起来;当statements 和 for loops不是javascript expression,不能直接使用它们作为props，可以赋值给变量，然后{变量}即可
	These two JSX expressions are equivalent:

	<MyComponent message="hello world" /> ........1
	<MyComponent message={'hello world'} />.......1

	<MyComponent message="&lt;3" />...............2
	<MyComponent message={'<3'} />................2

	<MyTextBox autocomplete />....................3
	<MyTextBox autocomplete={true} />.............3   the groups may conflict with  es6 object,in es6: {foo} is shot for {foo:foo}


6. 如果props是一个对象，下面两种操作等价：
	equivalent:
	
		function App1() {
		  return <Greeting firstName="Ben" lastName="Hector" />;
		}

		function App2() {
		  const props = {firstName: 'Ben', lastName: 'Hector'};
		  return <Greeting {...props} />;
		}