function Form() {
    return <form action="" className="grid grid-cols-[auto,1fr] gap-2 max-w-lg items-center">
        <Group label="name" />
        <Group label="I am super longggggggggggg" error="some error"/>
    </form>
}

function Group({ label, error }: { label: string, error?: string }) {
    return <>
        <label htmlFor={label}>{ label }</label>
        <div>
            <input type="" id={label} className="border px-4 py-2" />
        </div>
        { error && <div className="col-start-2 text-red-500">{ error }</div> }
    </>
}

export default Form;
