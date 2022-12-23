import {Radio , FormControl, FormLabel, Stack} from '@mui/material/';
import corPrincipal from '../../assets/js/script'

const RadioGroup=({radios,name,onChange,value})=>{


    const controlProps = (item) => ({
        checked: value === item,
        onChange: onChange,
        value: item,
        name: name,
        inputProps: { 'aria-label': item },
      });


    return <FormControl>
            <FormLabel id={name} sx={{color:corPrincipal}}>{name}</FormLabel>
        <Stack direction="row">
       { radios.map(radio=>{
         return <Radio
         {...controlProps(radio)}
         sx={{
           color: radio,
           '&.Mui-checked': {
             color: radio,
           },
         }}
       />
       })}
       </Stack>
    </FormControl>
}

export default RadioGroup