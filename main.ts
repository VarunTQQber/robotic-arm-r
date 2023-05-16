radio.onReceivedNumber(function (receivedNumber) {
    I = receivedNumber
})
let v = 0
let I = 0
radio.setGroup(45)
I = 99
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
basic.showString("R")
basic.forever(function () {
    if (I == 1) {
        if (v < 90) {
            v = v + 0
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
        }
    } else if (I == 2) {
        if (v > 0) {
            v = v - 0
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
        }
    }
    if (I == 3) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 25)
    }
    if (I == 4) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -35)
    }
    if (I == 5) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -80)
    }
    if (I == 6) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 80)
    }
    if (I == 0) {
        wuKong.stopAllMotor()
    }
})
