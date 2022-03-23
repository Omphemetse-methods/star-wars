interface props {
  className: string;
  text: string;
  url: text;
}

const BlockNav = (props: props) => {
  return (
    <p
      onClick={() => {
        window.open(url);
      }}
      className={`${props.className} border-r-2 border-white uppercase text-white text-clip font-medium text-md flex flex-col items-center justify-center py-4 cursor-pointer`}
    >
      {props.text}
    </p>
  );
};

export default BlockNav;
