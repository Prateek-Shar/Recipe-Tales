"use client";

import NewRecipeBanner from "@/components/Blog/NewRecipeBanner";
import Clock from "@/public/Images/blog_clock.png"
import serve from "@/public/Images/servings.png";
import Image from "next/image";
import close from "@/public/Images/close.png";
import add from "@/public/Images/add.png";
import { useState , useEffect } from "react";
import "@/app/globals.css"
import { InboxOutlined } from '@ant-design/icons';
import cloudinary from "@/middleware/cloudinary_connect";
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';


const form_data = {
    Author_name : "",
    Recipe_name : "",
    Recipe_short_desc : "",
    Prep_Time : "",
    Cook_Time : "",
    Servings : "",
    Blog : "",
    Tags : ""
}


const Page = () =>  {

    const [count , setCount] = useState<number[]>([1]);

    const [ingCount , setIngCount] = useState<number[]>([1]);
    const [insCount , setInsCount] = useState<number[]>([1]);
 
    const [successDiv , setSuccessDiv] = useState(false)
    const [errorDiv , setErrorDiv] = useState(false)

    const [ingredient , setIngredient] = useState<string[]>([""])
    const [instructions , setInstructions] = useState<string[]>([""])

    const [blogContentPlaceholder , setBlogContentPlaceholder] = useState<string>("Share the story behind your recipe, cooking tips, or any interesting anecdotes related to the dish.");
    const [tagsPlaceholder , setTagsPlaceholder] = useState<string>("E.g., Italian, Dessert, Quick Meals, Vegan");

    const url = process.env.NEXT_PUBLIC_CLOUDINARY_URL

    const [form , setForm] = useState(form_data)

    const default_form = {...form_data}

    const EnterRecipe = async(e:React.FormEvent) => {
        e.preventDefault()

        try {

            const res = await fetch("api/add_recipe" , {
                method : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(form)
            })

            if(!res.ok) {
                console.log("Data Not Sent");
                setForm(form_data)
                setErrorDiv(true)

                setTimeout(() => {
                    setErrorDiv(false)
                } , 3000)

                reload();

                return;
            }

            const data = await res.json()
            setForm(form_data)
            setSuccessDiv(true)

            setTimeout(() => {
                setSuccessDiv(false)
            } , 3000)
            
            reload();
        }

        catch(error) {
            console.log("Error is : " , error)
        }
    }


    const RenderNewInstructionsDiv = () => {
        setInstructions([...instructions , ""] ) 
        setInsCount(insCount => [...insCount , insCount.length + 1]);
    }


    const CloseDiv = (idx : number) => {
        if(idx == 1) return;
        setCount(count.filter( c => c != idx ));
    }   


    const RenderNewIngredientDiv = () => {
        setIngredient([...ingredient , ""] )
        setIngCount(ingCount => [...ingCount , ingCount.length + 1]);
    }

    const CloseIngredientDiv = (idx : number) => {
        if(idx == 1) return;    
        setIngCount(ingCount.filter( c => c != idx ));
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleChangeForTextareaIngredient = (e: React.ChangeEvent<HTMLTextAreaElement> , idx : number) => {
        const newIng = [...ingredient]
        newIng[idx] = e.target.value;
        setIngredient(newIng)
    }

    const handleChangeForTextareaIntructions = (e: React.ChangeEvent<HTMLTextAreaElement> , idx : number) => {
        const newIns = [...instructions]
        newIns[idx] = e.target.value;
        setInstructions(newIns)
    }
    
    const handleChangeForTextareaBlog = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    useEffect(() => {
        setForm(prev => ({ ...prev, Ingredient: ingredient }));
    }, [ingredient]);


    useEffect(() => {
        setForm(prev => ({...prev , Instructions : instructions}))
    } , [instructions])


    const reload = () => {
        setIngredient([""]); 
        setIngCount([1]); 
 
        setInsCount([1]);
        setInstructions([""]);

        setForm(default_form);

        setBlogContentPlaceholder("Share the story behind your recipe, cooking tips, or any interesting anecdotes related to the dish.");
        setTagsPlaceholder("E.g., Italian, Dessert, Quick Meals, Vegan");
    }

    // const [messageApi, contextHolder] = message.useMessage();

    // const props: UploadProps = {
    //     name: 'file',
    //     multiple: false,
    //     action: url,
    //     onChange(info) {
    //       const { status } = info.file;
    //       if (status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //       }
    //       if (status === 'done') {
    //         messageApi.success(`${info.file.name} file uploaded successfully.`);
    //       } else if (status === 'error') {
    //         messageApi.error(`${info.file.name} file upload failed.`);
    //       }
    //     },
    //     onDrop(e) {
    //         console.log('Dropped files', e.dataTransfer.files);
    //     },
    // };

    // const { Dragger } = Upload;

    return (

        <div className="w-full flex flex-col justify-center items-center bg-[#f9f8f5]">

            <div className="w-full">    
                <NewRecipeBanner />
            </div>

            <form onSubmit={EnterRecipe} className="w-full flex flex-col justify-center items-center relative">

                <div className="xl:w-[60%] mm:w-[90%] bg-white border-2 xl:px-10 xl:py-5 mm:py-2 mm:px-3 border-[#e7e1da] mt-10 rounded-[10px]">
                    <div className="w-full xl:mt-5 mm:mt-2">
                        <h2 className="font-Mogra p-2 pl-1 xl:text-3xl mm:text-2xl">Basic Information</h2>
                    </div>

                    <div className="w-full mt-5">
                        <h2 className="font-Mogra p-2">Author</h2>
                    </div>
                    
                    <div className="w-full bg-[#f9f8f5] border-2 border-[#e7e1da] mb-5 rounded-[5px]">
                        <input type="text" placeholder="Author Name" value={form.Author_name} onChange={handleChange} name="Author_name" className="w-full p-2 font-Poppins outline-0 text-[#847062] text-[15px]" autoComplete="off"/>
                    </div>

                    <div className="w-full mt-2">
                        <h2 className="font-Mogra p-2">Recipe Title</h2>
                    </div>

                    <div className="w-full bg-[#f9f8f5] border-2 border-[#e7e1da] rounded-[5px]">
                        <input type="text" placeholder="Recipe Name" name="Recipe_name" value={form.Recipe_name} onChange={handleChange} className="w-full p-2 font-Poppins outline-0 text-[#847062] text-[15px]"/>
                    </div>

                    <div className="w-full mt-5">
                        <h2 className="font-Mogra p-2">Short Description</h2>
                    </div>
                    
                    <div className="w-full bg-[#f9f8f5] border-2 border-[#e7e1da] mb-5 rounded-[5px]">
                        <input type="text" placeholder="Short Description" value={form.Recipe_short_desc} onChange={handleChange} name="Recipe_short_desc" className="w-full p-2 font-Poppins outline-0 text-[#847062] text-[15px]"/>
                    </div>
                </div>


                <div className="xl:w-[60%] mm:w-[90%] flex flex-col bg-white border-2 xl:px-10 xl:py-5 mm:py-2 mm:px-3 border-[#e7e1da] mt-10 rounded-[10px]">

                    <div className="w-full mm:mt-2 xl:mt-0">
                        <p className="font-Mogra xl:text-3xl mm:text-2xl">Recipe Details</p>
                    </div>

                    <div className="w-full flex xl:flex-row mm:flex-col justify-between items-center">
                        <div className="xl:w-[30%] mm:w-full flex flex-col xl:mt-5 mm:mt-8">
                            <div className="w-full flex justify-center mt-2">
                                <div className="w-[10%] flex items-center justify-center">
                                    <Image src={Clock} alt="Preview Image" height={20} width={20} />
                                </div>

                                <div className="w-full flex items-center">
                                    <p className="font-Poppins text-[12px] pl-2">Prep Time (in minutes)</p>
                                </div>
                            </div>

                            <div className="w-full border-2 border-[#e7e1da] mt-4 rounded-[5px]">
                                <input type="number" placeholder="30" name="Prep_Time" value={form.Prep_Time} onChange={handleChange} className="rounded-[5px] w-full p-1 font-Poppins outline-0 text-[#847062] text-[15px] bg-[#f9f8f5]"/>
                            </div>
                        </div>

                        <div className="xl:w-[30%] mm:w-full flex flex-col mt-5">
                            <div className="w-full flex justify-center mt-2">
                                <div className="w-[10%] flex items-center justify-center">
                                    <Image src={Clock} alt="Preview Image" height={20} width={20} />
                                </div>

                                <div className="w-full flex items-center">
                                    <p className="font-Poppins text-[12px] pl-2">Cook Time (in minutes)</p>
                                </div>
                            </div>

                            <div className="w-full border-2 border-[#e7e1da] mt-4 rounded-[5px]">
                                <input type="number" placeholder="30" name="Cook_Time" value={form.Cook_Time} onChange={handleChange} className="w-full rounded-[5px] p-1 font-Poppins outline-0 text-[#847062] text-[15px] bg-[#f9f8f5]"/>
                            </div>
                        </div>

                        <div className="xl:w-[30%] mm:w-full flex flex-col mt-5 xl:mb-0 mm:mb-3">
                            <div className="w-full flex justify-center mt-2">
                                <div className="w-[10%] flex items-center justify-center">
                                    <Image src={serve} alt="Preview Image" height={20} width={20} />
                                </div>

                                <div className="w-full flex items-center">
                                    <p className="font-Poppins text-[12px] pl-2">Servings</p>
                                </div>
                            </div> 

                            <div className="w-full border-2 border-[#e7e1da] mt-4 rounded-[5px]">
                                <input type="number" placeholder="4" name="Servings" value={form.Servings} onChange={handleChange} className="rounded-[5px] w-full p-1 font-Poppins outline-0 text-[#847062] text-[15px] bg-[#f9f8f5]"/>
                            </div>
                        </div>
                    </div>

                </div>                


                <div className="xl:w-[60%] mm:w-[90%] bg-white flex flex-col mt-10 border-2 xl:px-10 xl:py-5 mm:py-2 mm:px-3 border-[#e7e1da] rounded-[10px]">
                    
                    <div className="w-full xl:mt-0 mm:mt-2">
                        <p className="font-Mogra xl:text-3xl mm:text-2xl">Ingredients</p>
                    </div>

                    <div className="w-full flex flex-col mt-5">
                        {ingCount.map((idx) => (
                            <div className="w-full flex flex-row items-center py-2" key={idx}>
                                <div className="w-[90%] flex border-2 border-[#e7e1da] rounded-[5px] items-center">
                                    <textarea
                                    placeholder={`Ingredient ${idx}`}
                                    className="w-full p-1 pl-3 font-Poppins outline-0 text-[#847062] text-[14px] bg-[#f9f8f5] rounded-[5px]"
                                    name="Ingredient"
                                    value={ingredient[idx - 1] || ""} // ✅ only show this ingredient
                                    onChange={(e) => handleChangeForTextareaIngredient(e, idx - 1)} // ✅ update correct index
                                    />
                                </div>

                                <div
                                    className="xl:w-[3%] mm:w-[10%] flex items-center justify-center bg-[#fcfbfa] ml-2 border-2 border-[#f3f0ec] rounded-[5px]"
                                    onClick={() => CloseIngredientDiv(idx)}
                                >
                                    <Image src={close} alt="Close Div" className="p-1 my-1" height={20} width={20} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full bg-[#f9f8f5] flex justify-center items-center p-2 border-2 border-[#e7e1da] mt-5 rounded-[10px] hover:bg-green-400 hover:cursor-pointer xl:mb-0 mm:mb-3" onClick={RenderNewIngredientDiv}>
                        <Image src={add} alt="Add Steps" height={10} width={10} />
                        <p className="font-Poppins pl-5">Add Step</p>
                    </div>

                </div>


                <div className="xl:w-[60%] mm:w-[90%] bg-white flex flex-col mt-10 border-2 xl:px-10 xl:py-5 mm:py-2 mm:px-3 border-[#e7e1da] rounded-[10px]">
                    
                    <div className="w-full xl:mt-0 mm:mt-2">
                        <p className="font-Mogra xl:text-3xl mm:text-2xl">Cooking Instructions</p>
                    </div>

                    <div className="w-full flex flex-col mt-5">
                        {insCount.map((idx) => (
                        <div className="w-full flex flex-row items-center py-2" key={idx}>
                            {/* <div className="w-[4%]">
                                <div className="w-full h-10 rounded-full bg-amber-500 flex justify-center items-center">
                                    <p>{idx}</p>
                                </div>
                            </div> */}

                            <div className="w-[90%] flex border-2 border-[#e7e1da] rounded-[5px] items-center">
                                <textarea placeholder={`Step ${idx}`} className="w-full p-1 pl-3 font-Poppins outline-0 text-[#847062] text-[14px] bg-[#f9f8f5] rounded-[5px]" name="Instructions" value={instructions[idx - 1] || ""} onChange={(e)=> {handleChangeForTextareaIntructions(e , idx - 1)}}/>
                            </div>

                            <div className="xl:w-[3%] mm:w-[10%] flex items-center justify-center bg-[#fcfbfa] ml-2 border-2 border-[#f3f0ec] rounded-[5px]" onClick={ () => {CloseDiv(idx)} }>
                                <Image src={close} alt="Close Div" className="p-1 my-1" height={20} width={20} />
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className="w-full bg-[#f9f8f5] flex justify-center items-center p-2 border-2 border-[#e7e1da] mt-5 rounded-[10px] hover:bg-green-400 hover:cursor-pointer xl:mb-0 mm:mb-2" onClick={RenderNewInstructionsDiv}>
                        <Image src={add} alt="Add Steps" height={10} width={10} />
                        <p className="font-Poppins pl-5">Add Step</p>
                    </div>

                </div>


                <div className="xl:w-[60%] mm:w-[90%] bg-white flex flex-col mt-10 border-2 xl:px-10 xl:py-5 mm:py-2 mm:px-3 border-[#e7e1da] rounded-[10px]">
                    
                    <div className="w-full xl:mt-0 mm:mt-2">
                        <p className="font-Mogra text-3xl">Blog Content</p>
                    </div>

                    <div className="w-full mt-5 flex border-2 border-[#e7e1da] rounded-[5px] items-center xl:mb-0 mm:mb-2">
                        <textarea placeholder={blogContentPlaceholder} rows={8} className="py-2 px-2 w-full font-Poppins outline-0 text-[#847062] text-[14px] bg-[#f9f8f5] rounded-[5px]" name="Blog" value={form.Blog} onChange={handleChangeForTextareaBlog}/>
                    </div>

                </div>


                <div className="xl:w-[60%] mm:w-[90%] bg-white flex flex-col mt-10 border-2 xl:px-10 xl:py-5 mm:py-2 mm:px-3 border-[#e7e1da] rounded-[10px]">
                    
                    <div className="w-full xl:mt-0 mm:mt-2">
                        <p className="font-Mogra xl:text-3xl mm:text-2xl">Tags and Catagories</p>
                    </div>

                    <div className="w-full flex mt-5 rounded-[5px] items-center border-2 border-[#e7e1da] xl:mb-0 mm:mb-2">
                        <input placeholder={tagsPlaceholder} className="w-full pl-3 font-Poppins outline-0 text-[#847062] text-[14px] bg-[#f9f8f5] rounded-[5px] p-2"  name="Tags" onChange={handleChange} value={form.Tags}/>
                    </div>

                </div>


                <div className="xl:w-[60%] mm:w-[90%] bg-white flex justify-between items-center mt-10 mb-10 py-4 px-4 border-2 border-[#e7e1da] sticky bottom-0 opacity-90 rounded-[10px]">
                    {successDiv && (
                        <div className="xl:w-[24%] mm:w-[45%] flex justify-center">
                            <p className="font-Poppins text-green-400 py-2 mm:text-[10px]">Data Entered Successfully !!</p>
                        </div>
                    )}  

                    {errorDiv && (
                        <div className="xl:w-[24%] mm:w-[45%] flex justify-center">
                            <p className="font-Poppins text-red-600 py-2 xl:text-[16px] mm:text-[10px]">Something Went Wrong !!</p>
                        </div>
                    )} 


                    <div className="xl:w-[13%] mm:w-[20%] hover:cursor-context-menu bg-amber-600 xl:mr-10 mm:mr-0 rounded-[10px] ">
                        <button type="submit" className="w-full py-2 font-Poppins hover:cursor-pointer xl:text-[16px] mm:text-[12px]">Publish</button>
                    </div>
                </div>

            </form>

        </div>
    );

}

export default Page;