marked.setOptions({ breaks: true });

const renderer = new marked.Renderer();
const App = () => {
  const [text, setText] = React.useState(`# Heading
## Subheading
[Link](https://example.com)
Inline code: \`console.log('Hello, World!');\`
\`\`\`
// Code block
function greet() {
  return 'Hello, World!';
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://avatars.githubusercontent.com/u/84271800?v=4)
**Bold text**`);
  return (
    <div>
      <div className='names'>
        <h4>
          Editor <span>(.md)</span>
        </h4>
        <h4>Preview</h4>
      </div>
      <div className='container'>
        <textarea
          name='text'
          className='text'
          id='editor'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <Preview markdown={text} />
      </div>
    </div>
  );
};

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked.parse(markdown),
      }}
      id='preview'
    ></div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
