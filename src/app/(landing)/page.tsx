'use client';
import Image from "next/image";
import styles from "../styles/page.module.scss";
import Head from "next/head";
import Btn from "../components/Btn";
import ArrowRight from "../components/icones/ArrowRight";
import CarrosselCard from "../components/CarrosselCard";
import Accounts from "../components/illustrations/Accounts";
import CarrosselContainer from "../components/CarrosselContainer";
import OpenAccountMethods from "../components/OpenAccountMethods";
import OpenAccountMethodsContainer from "../components/OpenAccountMethodContainer";
import Accordion from "../components/Accordion";
import AccordionContainer from "../components/AccordionContainer";

export default function Home() {
  return (
    <main >
      <div>
        <Btn btnClass="btn lg btn-secondary"> Create Account <ArrowRight/> </Btn>
      </div>

      <div>
        <OpenAccountMethodsContainer title = "Open Account Methods"/>
      </div>

      <div className="container-xl">
        <CarrosselContainer />
      </div>

      <div>
        <AccordionContainer />
      </div>

    </main>
  );
}
