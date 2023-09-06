function Loading() {
  return (
    <div className="w-screen h-screen   flex flex-col justify-center items-center overflow-hidden fadeInBlur">
      <svg
        className="w-16"
        id="mySvg"
        width="118"
        height="107"
        viewBox="0 0 118 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#009fe3"
          id="path1"
          d="M61 0H118V47C118 47.5 117.6 48 117 48H95.8C95.4 48 95 47.6 95 47.2V21.3C95 20.6 94.4 20 93.7 20H45.6C45 20 44.9 19.8 45.3 19.3L61 0Z"
        />
        <path
          fill="#2b2c6b"
          id="path2"
          d="M0 77.9V75.7L19 51.6C19.7 50.8 20 50.9 20 51.9C19.9 57.3 20.7 62.6 22.4 67.6C24 72.3 26.1 76 28.7 78.8C31.8 82 35.7 84.2 40.3 85.5C42.2 86 46.3 86.2 52.8 86.2C73.8 86.1 95 86 116.3 86C116.7 86 117 86.3 117 86.7V105.4C117 105.8 116.7 106.1 116.3 106.1C90.8 106.1 65.5 106.1 40.2 106.1C36.7 106.1 33.2 105.6 29.7 104.7C26.3 103.8 23.1 102.5 20 100.7C10.9 95.5 4.2 87.9 0 77.9Z"
        />
      </svg>
      <h1 className="text-secondary-0 font-bold  animate-pulse mt-10 ">
        Veuillez patienter Un Moment...
      </h1>
    </div>
  );
}

export default Loading;
