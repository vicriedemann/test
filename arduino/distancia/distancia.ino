#include <math.h>

int trigger = 5;
int echo = 7;
double duration;
double distance;
float maxRange = 500.00;
float setRange = 200.00;
float minRange = 0;
float _current=0;

void setup() {
  // put your setup code here, to run once:
Serial.begin (9600);
 pinMode(trigger, OUTPUT);
 pinMode(echo, INPUT);
  

}

void loop() {
  // put your main code here, to run repeatedly:
digitalWrite(trigger, LOW); 
delayMicroseconds(2); 

digitalWrite(trigger, HIGH);
delayMicroseconds(15); 

digitalWrite(trigger, LOW); 
 

duration = pulseIn(echo, HIGH);


 //Calculate the distance (in cm) based on the speed of sound.
 distance =  floor(duration/58.2);
 distance = float(constrain(distance,0,250));
 
 if (distance < maxRange) {
   //int percent = map(distance,minRange,maxRange,0,500) ;
   if (distance > maxRange || distance < 1) {Serial.println("");} else {
    Serial.println (distance);
    }
   
  
}
 
 delay(1000);
}

 
