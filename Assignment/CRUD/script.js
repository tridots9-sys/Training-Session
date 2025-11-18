let tasks = JSON.parse(localStorage.getItem('tasks')) || []

let editIndex = null

function getdata() {
    const table = document.getElementById('table-body')
    const filter = document.getElementById('PriorityFilter').value
    console.log(tasks);


    table.innerHTML = "";

    const filtered = tasks.filter(tasks => filter === "All" || tasks.priority === filter)
    filtered.forEach((task, index) => {

        table.innerHTML += `
                        <tr>
                            <td>
                                <input type="checkbox" class="form-check-input">

                            </td>
                                <td>${task.title}</td>
                                <td>${task.date}</td>
                                <td>${task.priority}</td>
                                <td>
                                    <div class="container g-2">
                                        <button class="btn btn-success" onclick="viewdata(${index})">View</button>
                                        <button class="btn btn-primary" onclick="editdata(${index})">Edit</button>
                                        <button class="btn btn-danger" onclick="deletedata(${index})">Delete</button>
                                    </div>
                                </td>

                        </tr>
            `
    });

    if (filtered.length === 0) {
        table.innerHTML = `
            <tr>
                <td  colspan="5" class="text-center text-muted">No Records Found</td>
            </tr>    
            `
        return;
    }
}

document.getElementById('add').addEventListener('click', () => {
    const model = new bootstrap.Modal(document.getElementById("addModel"))
    model.show();

});

document.getElementById('title').addEventListener('focus', () => {
    document.getElementById('textinvalid').style.display = 'none'
})

document.getElementById('taskdate').addEventListener('focus', () => {
    document.getElementById('dateinvalid').style.display = 'none'
})
document.getElementById('enddate').addEventListener('focus', () => {
    document.getElementById('dateinvalid').style.display = 'none'
})


document.getElementById('adddata').addEventListener('click', () => {
    const title = document.getElementById('title').value
    const date = document.getElementById('taskdate').value
    const todate = document.getElementById('enddate').value
    const priority = document.getElementById('tasklevel').value
    const des = document.getElementById('description').value


    try {
        if (title === "") {
            document.getElementById('textinvalid').textContent = "Enter Text";
            document.getElementById('textinvalid').style.display = 'block'
            return;
        }
        else if (date === "") {
            document.getElementById('dateinvalid').textContent = "Enter Date";
            document.getElementById('dateinvalid').style.display = 'block'
            return;
        }
        else if (todate === "") {
            document.getElementById('dateinvalid').textContent = "Enter End Date";
            document.getElementById('dateinvalid').style.display = 'block'
            return;
        }
        else {
            if (date <= todate) {
                tasks.push({ title, date, todate, priority, des });
                localStorage.setItem("tasks", JSON.stringify(tasks))
                document.getElementById('title').value = ""
                document.getElementById('taskdate').value = ""
                document.getElementById('enddate').value = ""
                document.getElementById('tasklevel').value = ""
                document.getElementById('description').value = ""

                bootstrap.Modal.getInstance(document.getElementById('addModel')).hide()
                getdata()
            }
            else {
                document.getElementById('dateinvalid').textContent = "Enter Valid Date";
                document.getElementById('dateinvalid').style.display = 'block'
            }

        }
    }
    catch (err) {
        console.log(err)
    }
})



function deletedata(index) {

    const modal = new bootstrap.Modal(document.getElementById('confirmation'));
    modal.show();


    document.getElementById('yesbtn').addEventListener('click', () => {
        console.log(index)
        tasks.splice(index, 1)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        modal.hide()
        getdata()
    })

    document.getElementById('nobtn').addEventListener('click', () => {
        modal.hide()
    })



};

function removedata(event) {
    let index = event.target.dataset.index
    console.log(index);

}






function editdata(index) {
    editIndex = index;

    document.getElementById("edittask").value = tasks[index].title
    document.getElementById("editdate").value = tasks[index].date
    document.getElementById('editenddate').value = tasks[index].todate
    document.getElementById("editpriority").value = tasks[index].priority
    document.getElementById('edescription').value = tasks[index].des


    const model = new bootstrap.Modal(document.getElementById("editModel"))

    model.show();
}



document.getElementById('savechange').addEventListener('click', () => {


    const title = document.getElementById("edittask").value.trim();
    const date = document.getElementById("editdate").value;
    const todate = document.getElementById("editenddate").value;
    const priority = document.getElementById("editpriority").value;
    const des = document.getElementById('edescription').value;

    if (title === "") {
        document.getElementById('etextinvalid').textContent = "Enter Text";
        document.getElementById('etextinvalid').style.display = 'block'
        return;
    }

    if (date <= todate) {
        tasks[editIndex].title = title
        tasks[editIndex].date = date
        tasks[editIndex].todate = todate
        tasks[editIndex].priority = priority
        tasks[editIndex].des = des


        localStorage.setItem("tasks", JSON.stringify(tasks))

        getdata();

        bootstrap.Modal.getInstance(document.getElementById('editModel')).hide();
    } 
    else {
        document.getElementById('edateinvalid').textContent = "Enter Valid Date"
        document.getElementById('edateinvalid').style.display = 'block'
    }

});

document.getElementById('PriorityFilter').addEventListener("change", getdata)
getdata()

function viewdata(index) {
    const task = tasks[index]

    document.getElementById('modal-body').innerHTML = `
                    <p><strong>Title :</strong> ${task.title}</p>
                    <div class="d-flex justify-content-between">
                        <p><strong>From Date :</strong> ${task.date}</p> 
                        <p><strong>To Date :</strong> ${task.todate}</p> 
                    </div>
                    <p><strong>Priority :</strong> ${task.priority}</p>
                    <p><b>Description :</b> ${task.des}</p>
    `
    const model = new bootstrap.Modal(document.getElementById('viewModel'))

    model.show();
}

document.getElementById('close').addEventListener('click', () => {
    bootstrap.Modal.getInstance(document.getElementById('viewModel')).hide();

})



document.getElementById('search').addEventListener('keyup', (r) => {

    


    const searchTerm = r.target.value.toLowerCase()
    console.log(searchTerm);
    const table = document.getElementById('table-body')

    table.innerHTML = "";

    const filtered = tasks.filter(task => task.title.toLowerCase().includes(searchTerm))

    filtered.forEach((task, index) => {
        table.innerHTML += `
                        <tr>
                            <td>
                                <input type="checkbox" class="form-check-input">

                            </td>
                                <td>${task.title}</td>
                                <td>${task.date}</td>
                                <td>${task.priority}</td>
                                <td>
                                    <div class="container g-2">
                                        <button class="btn btn-success" onclick="viewdata(${index})">View</button>
                                        <button class="btn btn-primary" onclick="editdata(${index})">Edit</button>
                                        <button class="btn btn-danger" onclick="deletedata(${index})">Delete</button>
                                    </div>
                                </td>

                        </tr>
            `
    });

    if (filtered.length === 0) {
        table.innerHTML = `
            <tr>
                <td  colspan="5" class="text-center text-muted">No Records Found</td>
            </tr>    
            `
    }

})

document.getElementById('search').addEventListener('focusout', () => {
    document.getElementById('search').value = ""
    getdata()
})

document.getElementById('edittask').addEventListener('focus', () => {
    document.getElementById('etextinvalid').style.display = 'none'
})
document.getElementById('editenddate').addEventListener('focus', () => {
    document.getElementById('edateinvalid').style.display = 'none'
})
document.getElementById('editdate').addEventListener('focus', () => {
    document.getElementById('edateinvalid').style.display = 'none'
})


window.onload = getdata();
