console.log("Hello User!")
// Inner HTml Property hai ye sab 
document.querySelector(".box").innerHTML
// 'Hello Students ..' ( is command se box ke aander ho html likha hai bo dekhtega kuch bhi ho sakta hai)
document.querySelector(".main_box").innerHTML
// '<div class="box">Hello Students ..</div>'( isme main_box ke aander jo html likha hai bo dekhega same bese he jese box class ke sath hua tha )
document.querySelector(".box").innerText
// 'Hello Students ..' (isme jo box class me likha hai jo Text hai hai bo dikhega bus only text or kouch ni )

// Outer HTml property hai aab ... ->

document.querySelector(".main_box").outerHTML
// '<div class="main_box">\n        <div class="box">Hello Students ..</div>\n        <div class="box2">hello Second Student ..</div>\n    </div>' 
// (Jese innerhtml se class ke aander ki cheze dekh sakte hai bese he outerhtml se aapan us class ki chezee dekh sakte hai but thode alag aandaz se ... jada koi deffrence ni hai . Same he hai dono..)

document.querySelector(".main_box").tagName
// 'DIV' ( ye proparty class ka tagName bata deta hai jo bhi uske tag ka name hoga or ye serf Element ke liye he hota hai serf )

document.querySelector(".main_box").nodeName
// 'DIV' ( ye same tagname jes he hota hai bus ye sabhi node name ke liye use hota hai jesa ( commet node hua , text node hua , level node hua ETC... ))


document.querySelector(".main_box").textContent
// '\n        Hello Students ..\n        hello Second Student ..\n    '
// (ye serf text content ko dikhayega jo bhi class ke aander jitna bhii text likha hoga bo show karega or kuch ni..)

document.querySelector(".main_box").hidden
// false ( pahle ye puchega kay ye class hidden hai agar ni to simple answer false he aayega .. )
document.querySelector(".main_box").hidden = true
// true  ( or aapan ne yaha per hidden ko true kr diya hai jisse ye class main_box bali bo hidden ho jayegi...) jese html me ye cheez hidden ho gai 👇
//  <div class="main_box" hidden=""></div>

//  InnerHTMl ka use karke kisi bhi element ko change kr sakte hai EX => 
document.querySelector(".box").innerHTML = "Hey ye mene change kr diya first div me "
// 'Hey ye mene change kr diya first div me ' Replace hua Hello Students ki jage se 

document.querySelector(".box").hasAttribute("style")
// false  ( Yaha ye box class me puch rhaa hai ki style lagi hai ya ni ... but box me style ni lagi isliye false aaya )

document.querySelector(".box2").hasAttribute("style")
// true  ( yaha ye check kar raha ki box2 class me Style lagyi hai ya ni  .. But yaha BOX2 me Stle lagi hai isliye ye true ho gaya hhai )

document.querySelector(".box2").getAttribute("style")
// 'color: aqua;' ( yaha get yani aapan puch rahe hai kii kya attribute laga hai i meen kya style lagi ahi isme to bo bata deha ki kya kya style lagi hai )

document.querySelector(".box2").setAttribute("style", "color:blue")
// (Is setattribute se kisi bhi attribute ko change kr sakte hai or add kr sakte hai jese uper hua hai ki color ko blue set kr diya hai phale alag tha aab alag ho gaya hai )

document.querySelector(".box2").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
//  Is Command se aapan us class ke sare attributes ko ek br me he dekh sakte hai kon kon se hai 

document.querySelector(".box2").removeAttribute("style")
// ( Kisi bhi class me koi bhi attribute ko remove kr sakte hai isse ....)

document.querySelector(".box3").dataset
// DOMStringMap {createdby: 'Tiwari-Ji'}
// 👇
//  Aapan html me ek data- karke attribute hota hai jo ek data ko save kar leta hai jese mene ek data-createdby data name banaya or usme Tiwari-Ji save kr diay to aapan js ki help se dataset use karke DOM se pata kr sakte hai ki kya data hai us class me 

document.querySelector(".box").remove()
// ye commend se bo class remove kr sakte hai js se he jese aapan ne ki hai .box ko remove

document.querySelector(".main_box").classList
// DOMTokenList(3) ['main_box', 'contioner', 'boxes', value: 'main_box contioner boxes']  ( yaha aapna us class ki puri list dekh sakte hai kon kon si class hai usme element me...)

document.querySelector(".main_box").className
// 'main_box contioner boxes' ( iska kaam bhi koi hai bus isme serf naam aayega class ka or list bale me ek list banke aayegi konse number per kya hai ... )

document.querySelector(".main_box").classList.add("yello")
// isme aapanne main_box class me ek class add ki yello naam ki 
document.querySelector(".main_box").className
// 'main_box contioner boxes yello'
// or fer us main_box class ka classlist nikalke check ki kon kon si class hai us element me...

document.querySelector(".main_box").classList.remove("red")
// simple aapan ne jese add ki thi class bese he aapan ne remove kr di red naam ki class .main_box bali class me se ....
document.querySelector(".main_box").className
// 'main_box contioner boxes yello' ( remove karne ke bd aapnne classname se list nikali us element me kon kon si class hai ... to red bali remove ho gayi hai )

document.querySelector(".main_box").classList.toggle("red")
// false 
// ( is toggle ka bahut jada mast kaam ahi bahtu use aayegi ye cchez kuki isme hot aye hai ki agar kisi class me koi cheez i meen koi css lagyi hai to agr bo cheez kuli hai to toggle karne per band ho jayegi agar band hai to khul jayegi ... jese aapan ne kiya main_box me color laga tha to toggle karne per clolor hat haua )
document.querySelector(".main_box").classList.toggle("red")
// true ( uper toggle karne per color hat gaya tha to ek br fer kiya to bo color bapis se lag gaya yahi kaam hota hai toggle ka )

