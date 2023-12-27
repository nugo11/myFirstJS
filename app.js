//1)რა განსხვავება პრიმიტიულ და არაპრიმიტიულ მონაცემთა ტიპებში?
//answer: 

let answer = 'პრიმიტიულ მონაცემთა ტიპებს შეგვიძლია გადავცეთ მხოლოდ ერთი მნიშვნელობა, ხოლო არაპრიმიტიულ ტიპებს შეგვიძლია იმდენი მნიშნელობა გადავცეთ რამდენიც მოგვინდება.'

console.log(answer);

//2)რა განსხვავება ცვლადებს const და let შორის და დაწერეთ პატარა მაგალითიც!!
//answer: 

answer = 'const ცვლადს როდესაც მივანიჭებთ რაიმე მნიშვნელობას, ის იქნება უნიკალური და ვეღარ შევძლებთ შემდგომ გადაკეთებას, ხოლო let ცვლადისთვის მინიჭებული მნიშვნელობის გადაკეთება შესაძლებელია';

console.log(answer);

let name = 'Nugzari';
console.log(name);
name = 'Nugo';
console.log(name);

//3)დაწერეთ კოდი, სადაც აღწერთ თითოეული პრიმიტიული
//მონაცემთა ტიპის ცვლადს სხვადასხვა მნიშვნელობებით და 
// შეუცვალეთ რამდენიმეს შემდგომ მნიშვნელობები ანუ 
//გადააწერეთ ახალი მნიშვნელობა და დალოგეთ შემდეგ ეს ცვლადები.

let lastname = 'khutsishvili';
let age = 24;
let isMarried = true;
let empty;
let comment = null;

console.log(lastname, age, isMarried, empty, comment)

lastname = 24;
age = 'khutsishvili';
isMarried = false;

console.log(lastname, age, isMarried, empty, comment)



//4)აღწერეთ არაპრიმიტიული მონაცემთა ტიპები მაგალითად array
// და array-ში რომ გქონდეთ object და თქვენ შესახებ ინფორმაცია აღწერეთ ამ
// object-ში;მაგალითად let user = [{name: 'nika'}] და ასე
//შემდეგ ყველა ინფორმაციით შეავსეთ თქვენ შესახებ რომელიც შეიცავს
//(firstName,lastName,age,email,address,isStudent) და დალოგეთ

let user = [
    {
        firstname: 'Nugo',
        lastname: 'khutsishvili',
        age: 24,
        email: 'nugokhutsishvili@gmail.com',
        adress: 'Tbilisi',
        isStudent: true
    }
]

console.log(user);
