function Form() {
    return <form action="" className="grid grid-cols-[auto,1fr] gap-2 max-w-lg items-center">
        <Group label="name" />
        <Group label="I am super longggggggggggg"/>
    </form>
}

function Group({ label }: { label: string }) {
    return <>
        <label htmlFor={label}>{ label }</label>
        <input type="" id={label} className="border px-4 py-2" />
    </>
}

export default Form;
