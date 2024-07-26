var account = [
    {email: "mainh@gmail.com", password: "12345"},
    {email: "example@gmail.com", password: "1357"}
];

localStorage.setItem("account", JSON.stringify(account));

function handleLogin(event) {
    event.preventDefault();

    var _email = document.getElementById("email").value;
    var _password = document.getElementById("password").value;

    console.log("email:", _email);
    console.log("password:", _password);

    var accountCheck = false;
    for (const item of account) {
        if (item.email === _email && item.password === _password) {
            accountCheck = true;
            alert("Đăng nhập thành công");
            localStorage.setItem("account-login", _email);
            window.location.href = "index.html";
            break;
        }
    }
    if (!accountCheck) {
        alert("Sai email hoặc password");
    }
}

function renderDashboard() {
    document.getElementById("mainContent").innerHTML = `
        <h2>Thống kê khoá học</h2>
        <div class="table-responsive">
            <table class="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">Icon</th>
                        <th scope="col">Thống kê khoá học</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Icon</td>
                        <td>Thống kê lớp học</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Số lớp học</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Số lớp đang hoạt động</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Số lớp đã kết thúc</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Số lớp đang chờ</td>
                        <td>6</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}


localStorage.setItem("account", JSON.stringify(account));
function renderClass() {
    var _html1 = "";
    account.forEach(function(item, index)  {
        _html1 += `
        <tr>
                            <th scope="col"${index + 1}>1</th>
                            <th scope="col"${item.id}>RA01</th>
                            <th scope="col"${item.name}>Khoá học học1</th>
                            <th scope="col"${item.id}>1000</th>
                            <th scope="col"${+item.status ? "Hoat dong" : "khong hoat dong"}> Hoạt động</th>
                            <th class="d-flex" scope="col">
                                <a class="bg-" style="text-decoration: none;" href="" onclick="edit(${index})">Sửa</a>
                                <a class="xoa" style="text-decoration: none;" href="" onclick="(${index})">Xóa</a>
                            </th>
                        </tr>
        `;
           
    });
    function edit(index){
        console.log(list[index])

    }
    document.getElementById("mainContent").innerHTML = `
     <h2>Quản lý khoá học</h2>
        <div class="d-lg-flex justify-content-between">
            <div class="div2">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addNewModal">Thêm mới</button>
            </div>
            <div class="div3">
                <label for="">tìm kiem</label>
            <input type="text">
            </div>
            <div class="div4">
                
                <input class="" type="file ">lựa chọn
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-primary">
                <thead>
                        
                </thead>
                <tbody>
                         <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Mã khoá học</th>
                            <th scope="col">Tên khoá học</th>
                            <th scope="col">Thời gian(giờ)</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Hành động</th>
                         </tr>
                        <tr>
                            <th scope="col">2</th>
                            <th scope="col">RA02</th>
                            <th scope="col">Khoá học 2</th>
                            <th scope="col">2000</th>
                            <th scope="col">Không hoạt động</th>
                            <th class="d-flex" scope="col">
                                <a class="bg-" style="text-decoration: none;" href="" onclick="edit">Sửa</a>
                                <a class="xoa" style="text-decoration: none;" href="" onclick="">Xóa</a>
                            </th>
                         </tr>
                    </tbody>
                    ${_html1}
                </tbody>
            </table>
        </div>
         <main>
        <button onclik="trangLogIn()" type="button" class="btn btn-primary">Prew</button>
        <button type="button" class="btn btn-secondary">1</button>
        <button type="button" class="btn btn-success">2</button>
        <button type="button" class="btn btn-danger">3</button>
        <button type="button" class="btn btn-warning">4</button>
        <button type="button" class="btn btn-info">5</button>
        <button type="button" class="btn btn-light">6</button>
        <button type="button" class="btn btn-dark">7</button>
        <button type="button" class="btn btn-link">next</button>
    </main>
        `
}
var btOpen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal_header button');
var iconClose = document.querySelector('.modal_footer button');

function toggleModal(e) {
    console.log(e.target);
    modal.classList.toggle('hide');
}

btOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
        toggleModal(e);
    }
});

function dangXuat() {
    localStorage.removeItem("account-login");
    alert("Đã đăng xuất");
    window.location.href = "login.html";
}

localStorage.setItem("account", JSON.stringify(account));
function renderStuDent() {
    var _html2 = "";
    account.forEach(function(item, index)  {
        _html2 += `
        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th class="d-flex" scope="col">
                                <a class="bg-" style="text-decoration: none;" href="#" onclick="">Sửa</a>
                                <a class="xoa" style="text-decoration: none;" href="">Xóa</a>
                            </th>
                        </tr>
        `;
           
    });

    document.getElementById("mainContent").innerHTML = `
     <h2>Quản lý khoá học</h2>
        <div class="d-lg-flex justify-content-between">
            <div class="div2">
                <button class="open-modal-btn">Them moi</button>
            <div class="modal hide">
            <div class="modal_inner" >
            <div class="modal_header">
                <h3 class="top1">Modal-Thêm mới khoá học</h3>
                <i class="fa-solid fa-rectangle-xmark top2"></i>
                </div>
            <div class="modal_body">
                    <label for="">Ma khoa hoc (*)</label>
                    <input type="text "placeholder="nhap mã khoa hoc">
                    <br>
                    <br>
                    <div class="nut-">
                        <label for="">Tên khoá học (*)</label>
                    <input type="text"placeholder="Nhập tên khoa hoc">
                    </div>
                    <br>
                    <br>
            <div class="nut-">
                    <label for="">Thời gian (*)</label>
                    <input type="text"placeholder="Thời gian khoa hoc">
                    
            </div>
            <div class="modal_footer">
                    <button>close</button>
            </div>
        </div modal_inner>
       
    </>

            </div>
            <div class="div3">
                <label for="">tìm kiem</label>
            <input type="text">
            </div>
            <div class="div4">
                
                <input class="" type="file ">lựa chọn
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-primary">
                <thead>
                        
                </thead>
                <tbody>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Mã Sinh Viên</th>
                            <th scope="col">Tên Sinh Viên</th>
                            <th scope="col">Năm sinh</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">....</th>
                            <th scope="col">Trạng Thái</th>
                            <th scope="col">Lớp Học</th>
                            <th scope="col">Hành Động</th>
                        </tr>
                        <tr>
                            <th scope="col">1</th>
                            <th scope="col">SV001</th>
                            <th scope="col">Nguyễn Văn A</th>
                            <th scope="col">Nguyễn Văn B</th>
                            <th scope="col">2000</th>
                            <th scope="col">Hà Nội</th>
                            <th scope="col">....</th>
                            <th scope="col">Chờ lớp</th>
                            <th scope="col">ĐN-JS230407</th>
                            <th class="d-flex" scope="col">
                                <a class="bg-" style="text-decoration: none;" href="#" onclick="">Sửa</a>
                                <a class="xoa" style="text-decoration: none;" href="">Xóa</a>
                            </th>
                        </tr>
                    </tbody>
                    ${_html2}
                </tbody>
            </table>
        </div>
        
        `
        }
        
        localStorage.setItem("account", JSON.stringify(account));
function renderquanLLop() {
    var _html2 = "";
    account.forEach(function(item, index)  {
        _html2 += `
        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th class="d-flex" scope="col">
                                <a class="bg-" style="text-decoration: none;" href="#" onclick="">Sửa</a>
                                <a class="xoa" style="text-decoration: none;" href="">Xóa</a>
                            </th>
                        </tr>
        `;
           
    });

    document.getElementById("mainContent").innerHTML = `
     <h2>Quản lý khoá học</h2>
        <div class="d-lg-flex justify-content-between">
            <div class="div2">
                <button class="open-modal-btn">Them moi</button>
            <div class="modal hide">
            <div class="modal_inner" >
            <div class="modal_header">
                <h3 class="top1">Modal-Thêm mới khoá học</h3>
                <i class="fa-solid fa-rectangle-xmark top2"></i>
                </div>
            <div class="modal_body">
                    <label for="">Ma khoa hoc (*)</label>
                    <input type="text "placeholder="nhap mã khoa hoc">
                    <br>
                    <br>
                    <div class="nut-">
                        <label for="">Tên khoá học (*)</label>
                    <input type="text"placeholder="Nhập tên khoa hoc">
                    </div>
                    <br>
                    <br>
            <div class="nut-">
                    <label for="">Thời gian (*)</label>
                    <input type="text"placeholder="Thời gian khoa hoc">
                    
            </div>
            <div class="modal_footer">
                    <button>close</button>
            </div>
        </div modal_inner>
       
    </>

            </div>
            <div class="div3">
                <label for="">tìm kiem</label>
            <input type="text">
            </div>
            <div class="div4">
                
                <input class="" type="file ">lựa chọn
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-primary">
                <thead>
                        
                </thead>
                <tbody>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Mã Sinh Viên</th>
                            <th scope="col">Tên Sinh Viên</th>
                            <th scope="col">Năm sinh</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">....</th>
                            <th scope="col">Trạng Thái</th>
                            <th scope="col">Lớp Học</th>
                            <th scope="col">Hành Động</th>
                        </tr>
                        <tr>
                            <th scope="col">1</th>
                            <th scope="col">SV001</th>
                            <th scope="col">Nguyễn Văn A</th>
                            <th scope="col">Nguyễn Văn B</th>
                            <th scope="col">2000</th>
                            <th scope="col">Hà Nội</th>
                            <th scope="col">....</th>
                            <th scope="col">Chờ lớp</th>
                            <th scope="col">ĐN-JS230407</th>
                            <th class="d-flex" scope="col">
                                <a class="bg-" style="text-decoration: none;" href="#" onclick="">Sửa</a>
                                <a class="xoa" style="text-decoration: none;" href="">Xóa</a>
                            </th>
                        </tr>
                    </tbody>
                    ${_html2}
                </tbody>
            </table>
        </div>
        
        `
        }
        
