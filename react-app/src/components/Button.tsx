interface MyButtonProps{
  count:number;
  onClick:() => void;
}
function MyButton({count,onClick}:MyButtonProps){
  return (
    <button onClick={onClick}>{count}</button>
  );
};

export default MyButton;
