## 1. 동적인 요소가 마진값을 가지도록 하는것이 좋다

        {helpMessage ? (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginTop: 6, fontSize: 12 }}
          >
            {helpMessage}
          </Text>
        ) : null}

        다음과 같은 코드에는 helpMessage에 따라서 동적으로 style이 마진값을 가진다 하지만 정적인 요소에 마진값을 주게 되면 고정적으로 주게 되므로 동적인 요소인 곳에 줘야 디자인이 자연스럽다