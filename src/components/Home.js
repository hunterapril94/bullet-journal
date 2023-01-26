import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function Home() {
  const [quote, setQuote] = useState({
    text: "",
    author: ""
})

  useEffect(()=>{
    axios.get(`https://type.fit/api/quotes`, { crossdomain: true }).then(res => {
      // console.log(data.data[1])
      let randomQuote = () => Math.floor(Math.random() * 1643)
      // console.log(res.data[randomQuote()])
      const newQuote = res.data[randomQuote()]
      setQuote(prev=> ({...prev, text: newQuote.text, author: newQuote.author}))
      // console.log(quote)
    }).catch(error => console.log(error))
  }, [])

  return(
<div class="blockquote-wrapper">
  <div class="blockquote">
    <h1>
      {quote.text}
     </h1>
    <h4>&mdash;{quote.author}</h4>
  </div>
</div>
  )
}