function EmailIcon() {
  return (
    <div className="mobile:w-[50px] mobile:h-[50px] mobile:p-3 laptop:w-[80px] laptop:h-[80px] laptop:p-4 bg-primary rounded-lg border-accent border-[1px] border-solid">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 20 16"
      >
        <path
          id="ic_markunread_24px"
          d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,4-8,5L4,8V6l8,5,8-5Z"
          transform="translate(-2 -4)"
          fill="#8892B0"
        />
      </svg>
    </div>
  );
}

export default EmailIcon;
