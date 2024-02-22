import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';

const backgoundImage = '/images/backgroundHomePage.jpg';

const buttonStyle = {
  width: 200,
};

const boxStyle = {
  // backgroundImage: `url('/images/backgroundHomePage.jpg')`,
  backgroundSize: 'cover',
  overflow: 'hidden',
};

export default function Home() {
  const router = useRouter();

  const handleInvoiceClick = () => {
    router.push('/inputData');
  };

  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', border: 4, backgroundColor: 'black', width: '100%', height: '100vh', ...boxStyle }}>
      <Stack gap={4} sx={{ width: '35%', height: '30%', backgroundColor: 'rgba(255, 255, 255, 0.2)', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
        <Button variant='contained' color='success' sx={buttonStyle} onClick={handleInvoiceClick}>
          Invoice
        </Button>
        {/* <Button variant="contained" color="success" sx={buttonStyle}>
          Repair
        </Button> */}
      </Stack>
    </Stack>
  );
}
