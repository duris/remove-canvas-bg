import { useEffect, useRef } from "react";



const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);  

  useEffect(() => {
    const canvas = canvasRef.current;
    if(!canvas) {
      return;
    }
    const context = canvas.getContext('2d');
    if(!context){      
      return
    }
    
    const picture = document.getElementById("picture") as HTMLCanvasElement;
    if(!picture){
      return
    }

  
    


    context.drawImage(picture, 0, 0,200, 130)


    const imageData = context.getImageData(0,0,200,200)
    if(!imageData){
      return
    }
    var pix = imageData.data
    var newColor = {r:0, g:0, b:0, a:0}
    console.log(imageData);
    for(let i=0; i< imageData.data.length; i += 4){
      const r = pix[i]
      const g = pix[i +1]
      const b = pix[i +2]

      // if(!r || !g || !b){
      //   return
      // }
      
      // if(r != null && r>248) {
      //   pix[i] = newColor.r;
      // }
      // if(g != null && g>248) {
      //   pix[i + 1] = newColor.r;
      // }
      // if(b != null && b>248) {
      //   pix[i + 2] = newColor.r;
      // }

      if(r == 255 && g == 255 && b == 255){
        pix[i] = newColor.r;
        pix[i +1] = newColor.g;
        pix[i + 3] = newColor.a;
      }
      if(r == 254 && g == 254 && b == 254){
        pix[i] = newColor.r;
        pix[i +1] = newColor.g;
        pix[i + 3] = newColor.a;
      }
      if(r == 253 && g == 253 && b == 253){
        pix[i] = newColor.r;
        pix[i +1] = newColor.g;
        pix[i + 3] = newColor.a;
      }if(r == 252 && g == 252 && b == 252){
        pix[i] = newColor.r;
        pix[i +1] = newColor.g;
        pix[i + 3] = newColor.a;
      }
      if(r == 251 && g == 251 && b == 251){
        pix[i] = newColor.r;
        pix[i +1] = newColor.g;
        pix[i + 3] = newColor.a;
      }
      if(r == 250 && g == 250 && b == 250){
        pix[i] = newColor.r;
        pix[i +1] = newColor.g;
        pix[i + 3] = newColor.a;
      }
      if(r == 249 && g == 249 && b == 249){
        pix[i] = newColor.r;
        pix[i +1] = newColor.g;
        pix[i + 3] = newColor.a;
      }
      if(r == 252 && g == 250 && b == 250){
        pix[i] = newColor.r;
        pix[i +1] = newColor.g;
        pix[i + 3] = newColor.a;
      }
      if(r == 250 && g == 250 && b == 252){
        pix[i] = newColor.r;
        pix[i +1] = newColor.g;
        pix[i + 3] = newColor.a;
      }
      if(r == 248 && g == 248 && b == 251){
        pix[i] = newColor.r;
        pix[i +1] = newColor.g;
        pix[i + 3] = newColor.a;
      }


      
    }

    context.putImageData(imageData, 0, 0)

    

  }, []);

  return (
    <>
    
  <img  src='/apple.jpg' id='picture' className="w-[200px] float-left" />

  <canvas ref={canvasRef} className="border bg-blue-200" />
  <h2 className=" absolute top-0 left-60">Background Removed!</h2>
  
  </>
  );
}

export default Canvas