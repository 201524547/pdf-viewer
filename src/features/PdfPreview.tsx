'use client'
import React from 'react';
import styled from "styled-components";

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

const PreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
`

type Props = {
    iframeSrc: string
}

function PdfPreview({iframeSrc}:Props) {
    return (
        <Wrapper>
            <span>미리보기</span>
            <PreviewWrapper>
            <iframe src={iframeSrc} width={"100%"} height={"100%"}/>
            </PreviewWrapper>
        </Wrapper>
    );
}

export default PdfPreview;
