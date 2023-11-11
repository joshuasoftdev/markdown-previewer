import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState(`
 # H1 Text
## H2 text
[Learn more about google:](https://google.com)
<dl>
<dt>Text</dt>
<dd> Is something people use sometimes.</dd>

<dt>Markdown in HTML</dt>
<dd>Does *not* work **very** well. Use HRML <em>tags</em>.</dd>
</dl>

\` This is inline code\`

\`\`\`
function exampleOf()
{
   return multiLineCodeBlock;
}

\`\`\`


- Code
- All
- Day

> This is a block code 

![ Useful Programmer](https://pbs.twimg.com/josh.png)

**Bolded Text**
  `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}

export default App;
