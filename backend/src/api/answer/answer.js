export const answer = [
    //1
    `- First-party cookie คือ cookie ที่เกิดจากการที่เราเข้าไปใช้งานเว็ปไซต์นั้นโดยตรง เช่น การจดจำข้อมูลบ้างอย่าง เพื่อให้ผู้ใช้ไม่ต้องกรอกข้อมูลอีก
     -Third-party cookie คือ cookie ที่ไม่เจาะจงกับ domain ทำให้ติดตามพฤติกรรมการใช้งานได้ โดยส่วนมากใช้ในการ ยิง Ads(โฆษณา) เพื่อให้ Ads ตรง target`,
    //2
    `เป็นทฤษฏี การออกแบบ Database เพื่อให้เหมาะสมกับ งานที่นำไปใช้โดยจะเรียกได้เพียง 2อย่าง เนื่องจากทั้ง 3 อย่างมีความขัดแย้งกันอยู่
     - Consistency  หมายถึง ข้อมูลที่เราดึงขึ้นมาจะเป็นข้อมูลล่าสุดเสมอ
     - Availability หมายถึง การเข้าดึงข้อมูลจะได้ข้อมูลกลับมาเสมอ
     - Partition Tolerance หมายถึง ระบบสามารถทำการต่อไปได้ หากมี node ใดขาดการติดต่อไป หรือล่ม`,
    //3
    `- การ query แบบที่ 1 เป็นการค้นหาข้อมูลโดยการทำงานจะอยู่ที่ฝั่ง database เป็นฝั่งประมวลผลโดยมีการเชื่อมต่อ database เพียงครั้งเดียว
     - การ query แบบที่ 2 เป็นการแตก Process ที่ฝั่ง backend แล้วทำการเชื่อมต่อเข้าไปที่ database โดยจะมีการเชื่อมต่อตามจำนวนข้อมูลที่อยู่ใน array
     สรุปโดยการทำงาน query แบบที่ 1 ทำงานได้เร็วกว่า`,
    //4
    `- XSS คือ การโจมตีโดยใช้ script ในการดึงข้อมูล, แทรก script บ้างอย่างก่อนส่งให้เหยื่อ เพื่อดึงข้อมูลจากการใช้งานออกมา หรืออาจจะต้องการทำให้ Server ล่มจากการใส่ script ต่างๆวิธีการป้องกัน ผู้พัฒนา application ต้องอัพเดทการจัดการ XSS จาก framework ที่ใช้งาน เพื่อช่องว่างของ XSS
    - SQL Injection คือ การโจมตีโดยใช้ประโยชน์จาก SQL ในการ bypass ,ดึงข้อมูลต่างๆ จาก database โดยตรงวิธีการป้องกัน ช่องข้อมูลต่างๆ ควรมีการตรวจอักขระพิเศษ ที่ดูจะเข้าข่ายเป็นการใช้ SQL โดยตรง เช่น single quote หรือการเว้นวรรค ของ คำสั่ง sql ก็ช่วยป้องกันได้เช่นกัน
    - Man in the Middle Attack คือ การโจมตีประเภทดักข้อมูล ระหว่าง ผู้รับ-ผู้ส่ง ทำให้ได้ข้อมูลสำคัญๆ เช่น username, password หรือ ข้อมูลอื่นๆวิธีการป้องกัน ทำการเข้ารหัสข้อมูลก่อนส่งไป(SSL), อย่ารับใบรับรองจาก CA ที่ไม่น่าเชื่อถือ และอย่าเชื่อต่อ network ที่ไม่น่าเชื่อถือ`,
    //5
    `- callback ใช้กรณีที่ ต้องการทำผลลัพธ์จาก function นำมาประมวลผลต่อ แต่ถ้าใช้ประมวลผลต่อเป็นจำนวนมากๆ จะทำให้เกิด สิ่งที่เรียกว่า callback hell เพราะเนื่องจากต้องมี function ในการส่งไปเพื่อให้เรียกใช้เมื่อประมวลเสร็จสิ้น
    - promise เป็นการแก้ปัญหา ของ callback hell ที่มีการประมวลผลต่อเป็นลูกโซ่ ทำให้สามารถอ่าน code ได้เข้าใจง่ายกว่า และมี  Promise All ที่สามารถให้ทุก function ประมวลผลพร้อมกัน และรอจนกว่าจะเสร็จพร้อมกันถึงจะนำผลลัพธ์ไปทำงานต่อ ใช้ในกรณีที่ทุก function ทำงานแยกกันอย่างอิสระ และต้องการให้ทำงานพร้อมกัน
    - async/ await เป็นการแก้ปัญหา ของ callback hell แบบเดียวกับ promise ต่างกันที่รูปแบบการเขียน code ซึ่งโดยรวมแล้ว การเขียนแบบนี้ จะคล้ายกับ การเขียน Code Synchronous ของภาษาอื่นๆ`,
    //6
    `เรื่องการตั้งชื่อ api end point ควรต้องชื่อรูปแบบคำนาม  เช่น
    - /users
    - /users/1
    เนื่องจากมี Method ที่เป็นคำกริยาเพื่อใช้แยกการทำงานอยู่แล้ว เช่น 
    - Method GET ใช้สำหรับดึงข้อมูล ไปแสดงค่า
    - Method POST ใช้สำหรับบันทึกข้อมูลที หรือการ Authen ด้วย username, password
    - Method DELETE ใช้สำหรับการลบข้อมูลและส่วนสุดท้าย คือมีการจัดการเรื่องของ status code ให้ถูกต้องตามสากล
    - หมวด 2xx (success) 
    - หมวด 3xx (redirection)
    - หมวด 4xx (client error)
    - หมวด 5xx (server error)
    `
]