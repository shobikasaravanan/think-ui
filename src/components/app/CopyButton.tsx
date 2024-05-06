'use client';

import React, { useEffect, useState } from 'react'
import { copyUrl } from "@/helper/utils";
import copy from '../../../images/copy.png';
import greenTick from '../../../images/green-tick.png';

import Image from 'next/image';

const CopyButton = (props:any) => {
  const [textCopied, setTextCopied] = useState<boolean>(false);

  useEffect(() => {
    if(textCopied) {
        setTimeout(()=>setTextCopied(false), 3000)
    }
  }, [textCopied])

  return (
    <div className='flex items-center justify-end cursor-pointer m-4'>
           
        <button className="text-white" onClick={()=>{setTextCopied(true);copyUrl(props.linkText)}}>
            <Image src={textCopied ? greenTick : copy} width={15} height={15} alt={''}/>
            </button>
    </div>
  )
}

export default CopyButton