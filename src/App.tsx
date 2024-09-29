import Text from '@shared/Text';
import Button from './components/shared/Button';
import Input from '@shared/Input';
import TextField from '@shared/TextField';
import Alert from '@shared/Alert';
import { useAlertContext } from './context/AlertContext';

function App() {
  const { open } = useAlertContext();
  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2" color="blue">
        t2
      </Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text>t5</Text>

      <div style={{ height: 10, width: '100%', background: '#efefef' }} />
      <Button>클릭해주세요</Button>
      <Button color="success">클릭해주세요</Button>
      <Button color="success" weak>
        클릭해주세요
      </Button>
      <Button color="error">클릭해주세요</Button>
      <Button color="error" weak>
        클릭해주세요
      </Button>
      <Button full>클릭해주세요</Button>
      <Button full disabled>
        클릭해주세요
      </Button>
      <Button>클릭해주세요</Button>
      <div style={{ height: 10, width: '100%', background: '#efefef' }} />
      <Input placeholder="hihi" aria-invalid={true} />
      <Input aria-invalid={false} />

      <div style={{ height: 10, width: '100%', background: '#efefef' }} />
      <TextField label="아이디" />
      <TextField label="패스워드" hasError />

      <div style={{ height: 10, width: '100%', background: '#efefef' }} />
      {/* <Alert
        open={true}
        title="알람"
        description="알람이 떴습니다"
        onButtonClick={() => console.log('hi')}
      /> */}
      <Button
        onClick={() => {
          open({
            title: '카드신청 완료',
            description: '내역페이지에서 확인해주세요',
            onButtonClick: () => {
              //
            },
          });
        }}
      >
        알람클릭
      </Button>
    </div>
  );
}

export default App;
