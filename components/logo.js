const sizeOption = {
  big : {
    iconWidth: 75,
    iconHeight: 75,
    marginTop: 10,
    fontSize: 50,
  },
  small : {
    iconWidth: 72,
    iconHeight: 72,
    marginTop: 10,
    fontSize: 20,
  }
}

export default function Logo({size = "small"}){

  return(
    <div style={{textAlign: "center"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width={sizeOption[size].iconWidth} height={sizeOption[size].iconHeight} viewBox="0 0 24 24">
      <g transform="translate(-86 -10.557)">
        <g transform="translate(86 10.557)" fill="#fff" stroke="#707070" strokeWidth="1" opacity="0">
          <rect width="24" height="24" stroke="none"/>
          <rect x="0.5" y="0.5" width="23" height="23" fill="none"/>
        </g>
        <path d="M15,6.8a4.8,4.8,0,1,0-9.6,0C5.4,12.4,3,14,3,14H17.4S15,12.4,15,6.8Z" transform="translate(88 12.557)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <path d="M13.038,21a1.6,1.6,0,0,1-2.768,0" transform="translate(86.546 8.759)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </g>
    </svg>
    <p style={{ fontSize: sizeOption[size].fontSize, marginTop: sizeOption[size].marginTop}}>Notification System</p>
    </div>
  )
}
