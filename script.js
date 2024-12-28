const display = document.getElementById('display');

// ฟังชั่นสำหรับการส่งค่าตัวเลขไปยังหน้าจอแสดงผล
function appendNumber(number){
    display.value += number;
}

// ฟังชั่นสำหรับการส่งค่าเครื่องหมายไปยังหน้าจอแสดงผล
function appendOperator(operator){
    const lastchar = display.value.slice(-1);
    if(['+', '-', '*', '/'].includes(lastchar)){
        return;
    }
    display.value += operator
}

// ฟังชั่นสำหรับการเคลียร์หน้าจอแสดงผล
function clearDisplay(){
    display.value = "";
}

// ฟังชั้นสำหรับการคำนวนโดยนำสตริงมาคำนวนทางคณิตศาสตร์ด้วย eval
function calculate(){
    try {
        display.value = eval(display.value);
    }catch(err){
        display.value = "Error";
    }
}