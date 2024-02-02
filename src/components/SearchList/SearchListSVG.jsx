export const Arrow = () => {
    return <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="7"
    viewBox="0 0 11 7"
    fill="none"
  >
    <path d="M1 1L5.5 5L10 1" stroke="black" strokeWidth="2" />
  </svg>
} 

export const Favorit = () => {
  const svgStyle = {
    stroke: '#ABABAB',
    fill: 'none',
    ':hover': {
      stroke: '#0141BD',
      fill: '#0141BD',
    },
   
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={svgStyle}

      // fill="none"
    >
      <path
        d="M15 8.62752C12.5 2.74478 3.75 3.37135 3.75 10.8902C3.75 18.409 15 24.6748 15 24.6748C15 24.6748 26.25 18.409 26.25 10.8902C26.25 3.37135 17.5 2.74478 15 8.62752Z"
        
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const PenSvg = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.2126 11.6813L8 19.8938V24L12.1063 24L20.3189 15.7875M16.2126 11.6813L19.1574 8.73645L19.1592 8.73471C19.5646 8.32934 19.7676 8.12629 20.0017 8.05024C20.2079 7.98325 20.43 7.98325 20.6362 8.05024C20.8701 8.12624 21.0729 8.32905 21.4777 8.73385L23.2637 10.5199C23.6702 10.9264 23.8736 11.1297 23.9498 11.3641C24.0168 11.5703 24.0167 11.7924 23.9497 11.9986C23.8736 12.2328 23.6706 12.4359 23.2646 12.8418L23.2637 12.8427L20.3189 15.7875M16.2126 11.6813L20.3189 15.7875"
        stroke="#ABABAB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const DateSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6.66732 3.33317H6.00081C5.06739 3.33317 4.60033 3.33317 4.24382 3.51483C3.93021 3.67462 3.67543 3.9294 3.51564 4.243C3.33398 4.59952 3.33398 5.06658 3.33398 6V6.6665M6.66732 3.33317H13.334M6.66732 3.33317V1.6665M13.334 3.33317H14.0008C14.9342 3.33317 15.4003 3.33317 15.7568 3.51483C16.0704 3.67462 16.3261 3.9294 16.4858 4.243C16.6673 4.59917 16.6673 5.06567 16.6673 5.99726V6.6665M13.334 3.33317V1.6665M3.33398 6.6665V14C3.33398 14.9334 3.33398 15.3999 3.51564 15.7564C3.67543 16.07 3.93021 16.3252 4.24382 16.485C4.59999 16.6665 5.06648 16.6665 5.99808 16.6665H14.0032C14.9348 16.6665 15.4006 16.6665 15.7568 16.485C16.0704 16.3252 16.3261 16.07 16.4858 15.7564C16.6673 15.4002 16.6673 14.9344 16.6673 14.0028V6.6665M3.33398 6.6665H16.6673M13.334 13.3332H13.3357L13.3356 13.3348L13.334 13.3348V13.3332ZM10.0007 13.3332H10.0023L10.0023 13.3348L10.0007 13.3348V13.3332ZM6.66732 13.3332H6.66898L6.66895 13.3348L6.66732 13.3348V13.3332ZM13.3356 9.99984V10.0015L13.334 10.0015V9.99984H13.3356ZM10.0007 9.99984H10.0023L10.0023 10.0015L10.0007 10.0015V9.99984ZM6.66732 9.99984H6.66898L6.66895 10.0015L6.66732 10.0015V9.99984Z"
        stroke="#4B4B4B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LockSVG = () => {
   return <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M4.16602 8.26904C4.16602 12.3122 7.70308 15.6558 9.26867 16.9377C9.49274 17.1211 9.60611 17.214 9.77327 17.261C9.90344 17.2977 10.095 17.2977 10.2252 17.261C10.3927 17.2139 10.5052 17.122 10.7301 16.9378C12.2957 15.6559 15.8326 12.3126 15.8326 8.26941C15.8326 6.73932 15.2181 5.27171 14.1241 4.18977C13.0301 3.10783 11.5465 2.5 9.99942 2.5C8.45232 2.5 6.96852 3.10792 5.87456 4.18986C4.7806 5.2718 4.16602 6.73895 4.16602 8.26904Z"
      stroke="#4B4B4B"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33268 7.5C8.33268 8.42047 9.07887 9.16667 9.99935 9.16667C10.9198 9.16667 11.666 8.42047 11.666 7.5C11.666 6.57953 10.9198 5.83333 9.99935 5.83333C9.07887 5.83333 8.33268 6.57953 8.33268 7.5Z"
      stroke="#4B4B4B"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>;
}

export const SpeedometerSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M8.60437 12.3438C8.96434 12.6687 9.4293 12.8279 9.99925 12.8211C10.5692 12.8143 10.9892 12.6281 11.2591 12.2625L16.2987 5.4375L8.73936 9.9875C8.33439 10.2312 8.12066 10.6036 8.09816 11.1047C8.07566 11.6057 8.2444 12.0187 8.60437 12.3438ZM9.99925 3C10.8842 3 11.7354 3.11172 12.5528 3.33516C13.3702 3.55859 14.1389 3.89375 14.8588 4.34062L13.149 5.31562C12.654 5.08542 12.1403 4.91276 11.6079 4.79766C11.0754 4.68255 10.5392 4.625 9.99925 4.625C8.00442 4.625 6.30581 5.25807 4.90342 6.52422C3.50104 7.79036 2.79985 9.32396 2.79985 11.125C2.79985 11.6937 2.88609 12.2557 3.05858 12.8109C3.23106 13.3661 3.47479 13.8875 3.78977 14.375H16.2087C16.5537 13.8604 16.8049 13.3255 16.9624 12.7703C17.1199 12.2151 17.1987 11.6396 17.1987 11.0437C17.1987 10.5562 17.1349 10.0823 17.0074 9.62187C16.8799 9.16146 16.6887 8.71458 16.4337 8.28125L17.5136 6.7375C17.9636 7.37396 18.3198 8.05104 18.5823 8.76875C18.8448 9.48646 18.9835 10.2312 18.9985 11.0031C19.0135 11.775 18.916 12.513 18.706 13.2172C18.496 13.9214 18.1886 14.5917 17.7836 15.2281C17.6186 15.4719 17.3936 15.6615 17.1087 15.7969C16.8237 15.9323 16.5237 16 16.2087 16H3.78977C3.47479 16 3.17482 15.9323 2.88984 15.7969C2.60487 15.6615 2.37988 15.4719 2.2149 15.2281C1.82493 14.6187 1.52496 13.9721 1.31497 13.2883C1.10499 12.6044 1 11.8833 1 11.125C1 10.001 1.23623 8.94818 1.70869 7.96641C2.18115 6.98464 2.8261 6.12474 3.64353 5.38672C4.46096 4.6487 5.41713 4.06641 6.51204 3.63984C7.60695 3.21328 8.76935 3 9.99925 3Z"
        fill="#4B4B4B"
      />
    </svg>
  );
}

export const PetrolSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3 18V3.77778C3 3.28889 3.16616 2.87037 3.49848 2.52222C3.83081 2.17407 4.2303 2 4.69697 2H9.78788C10.2545 2 10.654 2.17407 10.9864 2.52222C11.3187 2.87037 11.4848 3.28889 11.4848 3.77778V10H12.3333C12.8 10 13.1995 10.1741 13.5318 10.5222C13.8641 10.8704 14.0303 11.2889 14.0303 11.7778V15.7778C14.0303 16.0296 14.1116 16.2407 14.2742 16.4111C14.4369 16.5815 14.6384 16.6667 14.8788 16.6667C15.1192 16.6667 15.3207 16.5815 15.4833 16.4111C15.646 16.2407 15.7273 16.0296 15.7273 15.7778V9.37778C15.6 9.45185 15.4657 9.5 15.3242 9.52222C15.1828 9.54444 15.0343 9.55556 14.8788 9.55556C14.2848 9.55556 13.7828 9.34074 13.3727 8.91111C12.9626 8.48148 12.7576 7.95556 12.7576 7.33333C12.7576 6.85926 12.8813 6.43333 13.1288 6.05556C13.3763 5.67778 13.7051 5.40741 14.1152 5.24444L12.3333 3.37778L13.2242 2.44444L16.3636 5.64444C16.5758 5.86667 16.7348 6.12593 16.8409 6.42222C16.947 6.71852 17 7.02222 17 7.33333V15.7778C17 16.4 16.795 16.9259 16.3848 17.3556C15.9747 17.7852 15.4727 18 14.8788 18C14.2848 18 13.7828 17.7852 13.3727 17.3556C12.9626 16.9259 12.7576 16.4 12.7576 15.7778V11.3333H11.4848V18H3ZM4.69697 8.22222H9.78788V3.77778H4.69697V8.22222ZM14.8788 8.22222C15.1192 8.22222 15.3207 8.13704 15.4833 7.96667C15.646 7.7963 15.7273 7.58519 15.7273 7.33333C15.7273 7.08148 15.646 6.87037 15.4833 6.7C15.3207 6.52963 15.1192 6.44444 14.8788 6.44444C14.6384 6.44444 14.4369 6.52963 14.2742 6.7C14.1116 6.87037 14.0303 7.08148 14.0303 7.33333C14.0303 7.58519 14.1116 7.7963 14.2742 7.96667C14.4369 8.13704 14.6384 8.22222 14.8788 8.22222ZM4.69697 16.2222H9.78788V10H4.69697V16.2222Z"
        fill="#4B4B4B"
      />
    </svg>
  );
}

export const SlideSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M8.33333 15H17.5M2.5 15H5M5 15V16.6667M5 15V13.3333M16.6667 9.99999H17.5M2.5 9.99999H13.3333M13.3333 9.99999V11.6667M13.3333 9.99999V8.33333M11.6667 4.99999H17.5M2.5 4.99999H8.33333M8.33333 4.99999V6.66666M8.33333 4.99999V3.33333"
        stroke="#4B4B4B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const CarSVG = () => {
 return <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M2.5 9.16667H3.37123M3.37123 9.16667H16.6288M3.37123 9.16667C3.38051 9.12378 3.39147 9.08126 3.40413 9.03927C3.43435 8.93903 3.47702 8.84263 3.56283 8.64957L4.85138 5.75033C5.10614 5.17712 5.23373 4.89034 5.43508 4.68018C5.61306 4.49441 5.83136 4.35251 6.0734 4.26531C6.34723 4.16667 6.66113 4.16667 7.28841 4.16667H12.7113C13.3386 4.16667 13.6528 4.16667 13.9266 4.26531C14.1687 4.35251 14.3866 4.49441 14.5646 4.68018C14.7658 4.8902 14.8932 5.17674 15.1476 5.74918L16.4413 8.66011C16.524 8.84618 16.5661 8.94087 16.5958 9.03926C16.6085 9.08126 16.6195 9.12378 16.6288 9.16667M3.37123 9.16667C3.36085 9.2147 3.35258 9.26319 3.34643 9.31194C3.33333 9.41581 3.33333 9.5214 3.33333 9.73267V14.1667M16.6288 9.16667H17.5M16.6288 9.16667C16.6392 9.2147 16.6475 9.26319 16.6536 9.31194C16.6667 9.41517 16.6667 9.52015 16.6667 9.72887V14.1668M16.6667 14.1668L13.3333 14.1667M16.6667 14.1668V14.9999C16.6667 15.9204 15.9205 16.6667 15 16.6667C14.0795 16.6667 13.3333 15.9205 13.3333 15V14.1667M13.3333 14.1667L6.66667 14.1667M6.66667 14.1667H3.33333M6.66667 14.1667V15C6.66667 15.9205 5.92047 16.6667 5 16.6667C4.07953 16.6667 3.33333 15.9205 3.33333 15V14.1667"
      stroke="#4B4B4B"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>;
}