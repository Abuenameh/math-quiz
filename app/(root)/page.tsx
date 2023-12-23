import Image from 'next/image'
import {Button} from "@/components/ui/button";
// import "mathlive";
// import "@cortex-js/compute-engine";
// import {ComputeEngine} from "@cortex-js/compute-engine";
// import {FormEvent, FormEventHandler, useEffect, useRef, useState} from "react";
// import {MathfieldElement} from "mathlive";
// import {BoxedExpression, ComputeEngine} from "@cortex-js/compute-engine";
// import {MathfieldElement} from "@/mathlive/mathlive";

// declare global {
//     namespace JSX {
//         interface IntrinsicElements {
//             'math-field': React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
//         }
//     }
// }
export default function Home() {
    // console.log(new ComputeEngine().parse("a"))
    // const ce = MathfieldElement.computeEngine;
    // const ce = new ComputeEngine()
    // console.log(ce)
    // if(ce) {
    //     ce.pushScope()
    //     ce.declare("P", "Predicates")
    //     ce.declare("Q", "Predicates")
    //     ce.declare("x", "Booleans")
    //     ce.latexDictionary =
    //         [
    //             ...ce.latexDictionary,
    //             {
    //                 latexTrigger: '\\forall',
    //                 kind: 'function',
    //                 parse: (parser) => {
    //                     return [
    //                         "ForAll",
    //                         parser.parseToken() ?? ["Error", "missing"],
    //                         parser.parseArguments()?.[0] ?? ["Error", "missing"],
    //                     ];
    //                 },
    //             },
    //             {
    //                 latexTrigger: '\\exists',
    //                 kind: 'function',
    //                 parse: (parser) => {
    //                     return [
    //                         "Exists",
    //                         parser.parseToken() ?? ["Error", "missing"],
    //                         parser.parseArguments()?.[0] ?? ["Error", "missing"],
    //                     ];
    //                 },
    //             },
    //         ];
    // }

    return (
        <main>
            <section className={"bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10"}>
{/*<math-field></math-field>*/}
            </section>
        </main>
    )
}
