// ARRAY POP METHOD
function one()
{
    var arr=[1,2,3,4,5,6,7,8,9,10]

    for(let i in arr)
    {
        arr.pop()
    }

    document.write(arr)
}

// MAXIMUM number find out
function two()
{
    var arr=[11,2,3,4,5,6,7,8,99,10]
    var max=0

        for(let i in arr)
        {
            if(arr[i]>max)
            {
            max=arr[i]
            }    
        }  
        document.write("max num=",max+"<br>")
// min number...........................
        for(let i in arr)
        {
            if(arr[i]<max)
            {
              max=arr[i]
            }
        }
        document.write("min num=",max)
}


// NESTED ARRAY PROGROM
function three()
{
    var arr=[['name','markand','age',26,['name','divyansh','age','28'],
    'email','markand@gmail.com','phone',8827184785,['address',617]]]
    let txt=" "
    
    for(let i in arr)
    {
        txt+=arr[i]
    }
    
    document.write(txt)
}

// NESTED OBJECT PROGRAM
function four()
{
    var arr=[
            {
              name:'markand',
              age:26,
              phone:88271,
              alt:[{surname:'dighe',address:'indore'}]
            },

            {
              name:'aayush',
              age:27,
              phone:86026,
              alt:[{surname:'sharma',address:'bhopal'}]
            },

            {
              name:'divyansh',
              age:33,
              phone:911167,
              alt:[{surname:'yadav',address:'puna'}]
            },

            {
              name:'shubham',
              age:33,
              phone:4589,
              alt:[{surname:'sharma',address:'indore'}]
            }
          ]

        document.write(JSON.stringify(arr))
        }
      
// ELEMENT PRESENT OR NOT PROGRAM
    function five()
    {
        var arr=[1,2,3,4,5,6,7,8]

    var n=5,flag=0

    for(let i in arr)
    {
    if(arr[i]==n)
    {
        flag=1;
        break;
    }
    }

    if(flag==1)
    document.write("present")

    else
    document.write("not present")
    }

// Replace array object.....................

    function six()
    {
      var a=[{"name":"aman","age":25,"phone":88271}]

      var b={"name":"markand","age":24,"phone":882718456}
      
      let Replace=(a,b)=>{

        let key=Object.values(b)

        let row=[{}]

        for(let i in a)
        {
          row[a[i]]=b[key[i]]

          b[a[i]]=b[key[i]]

          delete b[key[i]]
        }
      }
      Replace (a,b)
      document.write(JSON.stringify(b))

    }
    