
#include <bits/stdc++.h>
using namespace std;

void num_pyramid(int N)
{
   
    for (int i = 0; i < N; i++)
    {
        
        for (int j =0; j<N-i-1; j++)
        {
            cout <<" ";
        }
       
       
        for(int j=0;j< 2*i+1;j++){
            
            cout<<j;
        }
        
        
         for (int j =0; j<N-i-1; j++)
        {
            cout <<" ";
        }
      
        cout << endl;
    }
}

void invertedNum_pyramid(int N)
{
   
    for (int i = 0; i < N; i++)
    {
     
        for (int j =0; j<i; j++)
        {
            cout <<" ";
        }
       
      
        for(int j=0;j< 2*N -(2*i +1);j++){
            
            cout<<"*";
        }
        
        
         for (int j =0; j<i; j++)
        {
            cout <<" ";
        }
        
       
        cout << endl;
    }
}

int main()
{   
   int N;
    cout << "Enter the value of N: ";
    cin >> N; 
   num_pyramid(N);
    invertedNum_pyramid(N);

    return 0;
}