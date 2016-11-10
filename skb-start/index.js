var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODFiYTI5MjE1OGRjNzAwMTJkNzEzMDkiLCJ1c2VybmFtZSI6InN0YXllcjhAaS51YSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNDc4MjA2MDk5fQ.MAnZ2p-Po9w_resKm6leSBdku0b3xPGBbjE_-0N92UE';
var skb = new Skb(token);
skb.taskHelloWorld('May the Force be with you');