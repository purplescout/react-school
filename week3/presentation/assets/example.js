module.exports = `const Example = () => {
 return {
   <div style={myStyle.div}>
    <h1>
     {someString}
    </h1>
    <ul>
     {
      array.map((item) => return <li>{item}</li>);
     }
    </ul>
  </div>
 }
}`;