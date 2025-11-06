'use client'
import Form from "@/features/Form";
import PdfPreview from "@/features/PdfPreview";
import styled from "styled-components";
import {useState} from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
`

export default function Home() {
    const [iframeSrc, setIframeSrc] = useState("")


  return (
    <Wrapper>
     <Form onSave={(url)=>setIframeSrc(url)}/>
      <PdfPreview iframeSrc={iframeSrc}/>
    </Wrapper>
  );
}
