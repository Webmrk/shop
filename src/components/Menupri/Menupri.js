import classes from "./Menu.module.css";

const Menupri = ({onSelect}) => {
    
    const onClickHandler =() =>{
        onSelect("cia22o");
    }

    return (
        <div className={classes.menuburger} onClick={onClickHandler}>
            &equiv;
        </div>
    );
  };
  
  export default Menupri;