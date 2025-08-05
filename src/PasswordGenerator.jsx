import { useState } from "react"


export const PasswordGenerator = () => {

const[length,setLength]=useState(8);
const [includeUpperCase,setIncludeUpperCase]=useState(true);
const [includeLowerCase,setIncludeLowerCase]=useState(true);
const [includeNumbers,setIncludeNumbers]=useState(true);
const [includeSymbols,setIncludeSymbols]=useState(true)
const [password,setPassword]=useState("");

const generatePassword=()=>{
    let charset="";
    if(includeUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(includeLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if(includeNumbers) charset += "0123456789";
    if(includeSymbols) charset += "!@#$%^&*()_+-=";
  let generatedPassword="";
  for(let i=0;i<length;i++){
    const randomIndex=Math.floor(Math.random()*charset.length);
    generatedPassword += charset[randomIndex];
  }
    setPassword(generatedPassword);
};

const CopyToClipboard=()=>{
    navigator.clipboard.writeText(password);
    alert("Password Copied")
}

  return (
    <div className="password-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
            <label htmlFor="num">Password Length:</label>
            <input type="number" name="" id="num" value={length} onChange={(e)=>{
                setLength(parseInt(e.target.value))
            }} />
        </div>
<div className="checkBox-group">
    <input type="checkbox" name="" id="upper" checked={includeUpperCase}
    onChange={(e)=>setIncludeUpperCase(e.target.checked)} />
    <label htmlFor="upper">Include uppercase</label>
</div>
<div className="checkBox-group">
    <input type="checkbox" name="" id="lower" checked={includeLowerCase}
    onChange={(e)=>setIncludeLowerCase(e.target.checked)} />
    <label htmlFor="lower">Include lowercase</label>
</div>
<div className="checkBox-group">
    <input type="checkbox" name="" id="number" checked={includeNumbers}
    onChange={(e)=>setIncludeNumbers(e.target.checked)} 
    />
    <label htmlFor="number" >Include Numbers</label>
</div>
<div className="checkBox-group">
    <input type="checkbox" name="" id="symbol" checked={includeSymbols}
    onChange={(e)=>setIncludeSymbols(e.target.checked)} 
    />
    <label htmlFor="symbol">Include Symbols</label>
</div>
<button className='generate-btn'onClick={generatePassword}>Generate Password</button>
<div className="generated-password">
    <input type="text" readOnly  value={password}/>
    <button className="copy-btn" onClick={CopyToClipboard}>Copy</button>
</div>
    </div>
  )
}
