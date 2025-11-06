'use client'
import React, {useState} from 'react';
import styled from "styled-components";
import {PDFDocument, StandardFonts} from "pdf-lib";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  
  padding: 16px;
  margin: 20px;
  
  border: 1px solid #ededed;
`

type Props = {
    onSave: (file: string)=>void
}


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

function Form({onSave}:Props) {
    const [name, setName] = useState("lee joon hee")
    const [address, setAddress] = useState("SungNam-si, GyungGi-do, Korea")
    const [birthDay, setBirthDay] = useState("1996.03.03")

    const onSubmit = async ()=>{
        const response = await fetch(`${basePath}/sample.pdf`);
        const pdfBytes = await response.arrayBuffer();

        // 2. pdf-lib으로 로드
        const pdfDoc = await PDFDocument.load(pdfBytes);
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
        const pages = pdfDoc.getPages()
        const firstPage= pages[0]

        firstPage.drawText(name,{
            x: 272,
            y: 660,
            size: 12,
            font: helveticaFont,
        })
        firstPage.drawText(address,{
            x: 160,
            y: 596,
            size: 12,
            font: helveticaFont,
        })
        firstPage.drawText(birthDay,{
            x: 360,
            y: 640,
            size: 12,
            font: helveticaFont,
        })
        // 3️⃣ 수정된 PDF 저장
        const modifiedPdfBytes = await pdfDoc.save();

        // 4️⃣ Blob으로 변환
        const blob = new Blob([modifiedPdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });

        // 5️⃣ 브라우저 내 임시 URL 생성
        const url = URL.createObjectURL(blob);

        // 6️⃣ iframe에 띄울 URL 설정
        onSave(url)
    }

    return (
        <Wrapper>
            <span> 입력창 </span>
            <div>
                <span>이름</span>
                <input value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
                <span>주소</span>
                <input value={address} onChange={e=>setAddress(e.target.value)}/>
            </div>
            <div>
                <span>생년월일</span>
                <input value={birthDay} onChange={e=>setBirthDay(e.target.value)}/>
            </div>
            <button onClick={onSubmit}>반영</button>
        </Wrapper>
    );
}

export default Form;
