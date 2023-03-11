

function Categories({categorySelect, setCategorySelect, categories}) {

    return (
        <div>
            <select 
                value={categorySelect}
                className="lmj-categories-select"
                onChange={(e) => setCategorySelect(e.target.value)}
            >
                <option value=''>---</option>
		    	{categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                    ))}
		    </select>
            <button onClick={() => setCategorySelect('')} >Réinitialiser</button>
        </div>
    )
};

export default Categories;