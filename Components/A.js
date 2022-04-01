import Link from "next/link";
import Styles from '../Styles/A.module.css';
export default function({text, href}){
     return(
          <Link href={href}><a className={Styles.link}>{text}</a></Link>
     )
}