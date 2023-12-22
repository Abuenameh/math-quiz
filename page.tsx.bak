'use client';

import Image from 'next/image'
import {Button} from "@/components/ui/button";
import "mathlive";
import "@cortex-js/compute-engine"
import {FormEvent, FormEventHandler, useEffect, useRef, useState} from "react";
import {MathfieldElement} from "mathlive";
import {BoxedExpression} from "@cortex-js/compute-engine";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'math-field': React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
        }
    }
}

export default function Home() {
    const [value1, setValue1] = useState("\\sqrt{x}");
    const [value2, setValue2] = useState("\\sqrt{x}");
    // const [expression1, setExpression1] = useState(MathfieldElement.computeEngine?.parse(""));
    // const [expression2, setExpression2] = useState(MathfieldElement.computeEngine?.parse(""));
    // const [expression1, setExpression1] = useState<BoxedExpression|null>(null);
    // const [expression2, setExpression2] = useState<BoxedExpression|null>(null);
    const [expression1, setExpression1] = useState<BoxedExpression|undefined>(undefined);
    const [expression2, setExpression2] = useState<BoxedExpression|undefined>(undefined);

    const ce = MathfieldElement.computeEngine;
    if(ce) {
        ce.pushScope()
        ce.declare("P", "Predicates")
        ce.declare("Q", "Predicates")
        ce.declare("x", "Booleans")
        ce.latexDictionary =
            [
                // Include all the entries from the default dictionary...
                ...ce.latexDictionary,
                // ...and add the `\smoll{}{}` command
                {
                    // The parse handler below will be invoked when this LaTeX command is encountered
                    latexTrigger: '\\forall',
                    kind: 'function',
                    parse: (parser) => {
                        // We're expecting two arguments, so we're calling
                        // `parseGroup()` twice. If `parseGroup()` returns `null`,
                        // we assume that the argument is missing.
                        return [
                            "ForAll",
                            parser.parseToken() ?? ["Error", "missing"],
                            parser.parseArguments()?.[0] ?? ["Error", "missing"],
                        ];
                    },
                },
                {
                    // The parse handler below will be invoked when this LaTeX command is encountered
                    latexTrigger: '\\exists',
                    kind: 'function',
                    parse: (parser) => {
                        // We're expecting two arguments, so we're calling
                        // `parseGroup()` twice. If `parseGroup()` returns `null`,
                        // we assume that the argument is missing.
                        return [
                            "Exists",
                            parser.parseToken() ?? ["Error", "missing"],
                            parser.parseArguments()?.[0] ?? ["Error", "missing"],
                        ];
                    },
                },
            ];
    }
    const mf = useRef(null)
    useEffect(() => {
        // Read more about customizing the mathfield: https://cortexjs.io/mathlive/guides/customizing/
        if (!mf.current) return

        // mf.current.setValue("x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}")
        // mf.current.executeCommand('speak')
        // mf.current.smartFence = true

        // This could be an `onInput` handler, but this is an alternative
        // mf.current.addEventListener('input', (evt) => {
        //     // When the return key is pressed, play a sound
        //     if (evt.inputType === 'insertLineBreak') {
        //         // The mathfield is available as `evt.target`
        //         // The mathfield can be controlled with `executeCommand`
        //         // Read more: https://cortexjs.io/mathlive/guides/commands/
        //         evt.target.executeCommand('plonk')
        //     }
        // })
    }, [])

    function handleChange1(evt: React.ChangeEvent<MathfieldElement>) {
        setValue1(evt.target.value);
        setExpression1(MathfieldElement.computeEngine?.parse(evt.target.value));
        // console.log(expression2)
        expression2 && console.log(expression1?.isEqual(expression2))
    }

    function handleChange2(evt: React.ChangeEvent<MathfieldElement>) {
        setValue2(evt.target.value);
        setExpression2(MathfieldElement.computeEngine?.parse(evt.target.value));
        // console.log(expression2)
        expression2 && console.log(expression1?.isEqual(expression2))
    }

    return (
        <main>
            <div className={"w-1/2 p-10"}>
                <math-field ref={mf} onInput={handleChange1}>
                    {value1}
                </math-field>
            </div>
            <div className={"w-1/2 p-10"}>
                <math-field onInput={handleChange2}>
                    {value2}
                </math-field>
            </div>
            <p>{value1}</p>
            <p>Equal: {expression2 && expression1?.isEqual(expression2).toString()}</p>
            <p>Equal: {expression2 && expression1?.simplify().isEqual(expression2.simplify()).toString()}</p>
            <p>{expression1?.toString()}</p>
            <p>{expression2?.toString()}</p>
            {/*<textarea value={value}></textarea>*/}
        </main>
    )
}
