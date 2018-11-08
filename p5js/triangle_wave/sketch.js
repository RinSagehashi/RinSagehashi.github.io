var canvasWidth = 1000;
var canvasHeight = 400;
var waveZoneWidth = 700;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(30);
    THETA = 0;
    t=0
    dTheta=PI/360;
    R=(canvasWidth-waveZoneWidth-50*2)/2;
    N=31;
}

function draw() {
    background(0);
    THETA=dTheta*t;
    stroke(0xff);
    noFill()
    px=py=0;
    line(canvasWidth-waveZoneWidth,0,canvasWidth-waveZoneWidth,canvasHeight);
    translate(R+50,canvasHeight/2);
    line(0,0,waveZoneWidth+R+50,0);
    this.pm=+1;
    for(i=1;i<=N;i+=2) {
        r=R/(i*i);
        theta=i*THETA;
        ellipse(px,py,2*r,2*r);
        line(px,py,px+r*cos(theta),py+pm*r*sin(theta));
        //translate(r*sin(theta),r*cos(theta));
        px+=r*cos(theta);
        py+=pm*r*sin(theta);
        pm*=-1;
    }
    line(px,py,R+50,py);
    for(this.i=0;this.i<=t&&this.i/2<=waveZoneWidth;this.i++) {
        point(R+50+this.i/2,R*triangleWave(dTheta*(t-this.i)));
    }
    t++;
}

function squareWave(theta) {
    this.d = 0;
    for(j=1;j<=N;j+=2) {
        this.d+=sin(theta*j)/j;
    }
    return this.d;
}

function triangleWave(theta) {
    this.d = 0;
    this.pm = +1;
    for (j=1;j<=N;j+=2) {
        this.d += pm*sin(theta*j)/(j*j);
        pm*=-1;
    }
    return this.d;
}