function register() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    
    console.log (username,password)
    if(username && password) {
        let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        const exist = accounts.some(account => account.username === username);
        if (exist){
            alert('Tên đặng nhập đã tồn tại vui lòng chọn tên đăng nhập khác');
            return;

        }
        accounts.push ({
            username: username,
            password: password,
            date: date,
            gender: gender,
        });
        
        localStorage.setItem('accounts', JSON.stringify(accounts))

            alert ('Đăng ký thành công.Vui lòng đăng nhập nho!!!')
            window.location.href = './signin.html'
    }else{
            alert ('Vui lòng nhập đầy đủ thông tin!!!')
        }
    }


