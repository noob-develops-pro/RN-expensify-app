#### ScrollView can be on vertical and horizontal, by default its on vertical. you need of horizontal scroll specify in the ScrollView Tag.

    <ScrollView horizontal style={styles.container}> </ScrollView>

```
Platform from RN gives info about the platforn being used e.g ios or android

```

###### StatusBar gives info about the Status bar of the device. like StatusBar.currentHeight

###### by default RN Router gives a default header which we can off by passing options obj

             <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen} />

### common Folders used are:

        -screens        -navigation         -components
        -assets         -config             -themes         -redux
