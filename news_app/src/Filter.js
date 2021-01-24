import React, {Component } from 'react';
import './Filter.css';
export default class Filter extends Component{
// For resetting input fields    
reset=()=>{
    document.getElementById('con').value='';
    document.getElementById('lang').value='';
    document.getElementById('sdate').value='';
    document.getElementById('edate').value='';
    
}


render(){
    //Rendering Filter News
    return(
        <div className='filterBlock'>
            <div className='head'>
                <p>Filter News</p>
                <p className='reset' onClick={this.reset}>Reset</p>
            </div>
            <hr/>
            <div>
                <label>language</label>
                <select id='lang' defaultValue='' name='language'>
                    <option value="">Select</option>
                    <option value="ar">Arabic</option>
                    <option value="zh">Chinese</option>
                    <option value="nl">Dutch</option>
                    <option value="en">English</option>
                    <option value="fi">Finnish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japenese</option>
                    <option value="ko">Korean</option>
                    <option value="msa">Malay</option>
                    <option value="pt">Protguese</option>
                    <option value="ru">Russian</option>
                    <option value="es">Spanish</option>
                </select>
                <label>country</label>
                <select id='con' defaultValue='' name='country'>
                    <option value="">Select</option>    
                    <option value="US">United State</option>
                    <option value="TW">Taiwan</option>
                    <option value="DE">German</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CN">China</option>
                    <option value="IN">India</option>
                    <option value="ES">Spain</option>
                    <option value="IT">Italy</option>
                    <option value="PL">Poland</option>
                    <option value="AU">Australia</option>
                    <option value="MY">Malayasia</option>
                    <option value="SG">Singapore</option>
                    <option value="CA">Canada</option>
                    <option value="KR">South Korea</option>
                    <option value="DK">Denmark</option>
                    <option value="FR">France</option>
                    <option value="BE">Belgium</option>
                    <option value="JP">Japan</option>
                    <option value="AT">Austria</option>
                    <option value="PT">Portugal</option>
                    <option value="PH">Philippines</option>
                    <option value="HK">Hong Kong</option>
                    <option value="AR">Argentina</option>
                    <option value="VE">Venezuela</option>
                </select>
                <label>start date</label>
                <input type='date' name='start_date' id="sdate"></input>
                <label>end date</label>
                <input type='date' name='end_date' id="edate"></input>
                <button className='show' onClick={()=>alert('clicked')}>Show News</button>
            </div>
        </div>
    )
}
}
