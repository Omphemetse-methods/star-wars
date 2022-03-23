interface props {
  className: string;
  text: string;
}

const BlockNav = (props: props) => {
  return (
    <p
      className={`${props.className} border-r-2 border-white uppercase text-white text-clip font-medium text-md flex flex-col items-center justify-center py-4`}
    >
      {props.text}
    </p>
  );
};

export default BlockNav;
