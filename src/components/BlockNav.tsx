interface props {
  className: string;
  text: string;
  url: string;
}

const BlockNav = (props: props) => {
  return (
    <p
      onClick={() => {
        window.open(props.url);
      }}
      className={`${props.className} border-r-2 border-white uppercase text-white text-clip font-medium text-md flex flex-col items-center justify-center py-4 cursor-pointer`}
    >
      {props.text}
    </p>
  );
};

export default BlockNav;
