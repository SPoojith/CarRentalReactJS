import './footer.css'
import { GlobalState } from '../../src/store';

const a = (item)=>{
    return item*item;
}
const b = (item)=>{
    return (item*item)/item;
}
const c = (item)=>{
    return item+item;
}
function Footer({color}) {
    const count = GlobalState((state) => state.count);
     const multiplier = (a) =>{
        return a*2
     };
     const multiplier3 = (a) =>{
        return a*3
     };


    return(
        <div className="Footer" style={{ '--footer-bg-color':  color.footer}}>
            <p style={{margin:'0px'}}>this if footer</p>
            <p style={{margin:'0px'}}>count is {count}</p>
        </div>
    )
}

export default Footer;
export { a,b,c};
