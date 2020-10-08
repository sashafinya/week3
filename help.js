/*
            y = sqrt(x), y**2 = x
            3 = sqrt(9), 3**2 = 9
*/
function  sqrt(x)
{
             y = 1
             while (y**2 < x)
             {
                    y = y + 1
             }
  
             if (y**2 === x)
             {
                    console.log(`sqrt(${x}) = ${y}`)
             }
             else 
             {  
                       console.log("Нет точного корня")

               }

                }
sqrt(625) 
sqrt(1024)

