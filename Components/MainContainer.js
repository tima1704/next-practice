import Head from "next/head";
import A from "./A";
const MainContainer = ({children, keywords}) => {
     return (
          <>
               <Head>
                    <title>{keywords}</title>
                    <meta keywords={'Timur Ibatullin' + keywords}></meta>
               </Head>
               <div className="navbar">
                    <A href={`/`} text={'Главная'}/>
                    <A href={`/users`} text={'Users'}/>
               </div> 
               <div>
                    {children}
               </div>
               <style jsx>
                    {`
                         .navbar{
                              background: orange;
                              padding: 15px;
                              font-size: 20px;
                         }
                    `}
               </style>
          </>
     );
};

export default MainContainer;